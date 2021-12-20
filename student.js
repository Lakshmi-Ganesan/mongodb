use integra;
//db.createCollection("student")
//db.student.drop()
db.student.insertMany( [
    {name:"raja",age:21,presentdays:28},
    {name:"siva",age:21,presentdays:28},
    {name:"mani",age:21,presentdays:28},
    {name:"jothi",age:50,presentdays:30},
    {name:"chitra",age:50,presentdays:30},
    {name:"abi",age:50,presentdays:30},
    {name:"dinesh",age:85,presentdays:31},
    {name:"aswin",age:85,presentdays:31},
    {name:"praveen",age:85,presentdays:31},
    {name:"thara",age:74,presentdays:20},
    {name:"dharini",age:74,presentdays:20}])
    
   // db.student.find({$and:[{age:23},{name:"siva"}]})
   //db.student.find({$or:[{age:23},{age:15}]})
  // db.student.find({age:{$ne:23}})
 // db.student.find({age:{$in:[23,45,54]}})
// db.student.find({age:{$nin:[23,45]}})
// db.student.find({age:{$gt:23}})
 //db.student.find({age:{$gte:23}})
 //db.student.find({age:{$gt:45}},{_id:0,name:0})
 //db.student.find({age:{$gt:30}}).limit(2).skip(2)
 //db.student.find().sort({age:1})
 //db.student.find().sort({age:-1})
 //db.student.distinct("age")
 //db.student.updateMany({age:23},{$set:{presntdays:30}})
//db.student.updateOne({age:21},{$set:{presntdays:28}})
//db.student.updateOne({name:"dharini"},{$set:{presntdays:27}})
 //db.student.find()
db.student.aggregate( [
    {
        $group:{_id:"$age",total:{"$sum":"$presentdays"}}
    },
    {
        $match:{total:{$gt:23}}
    },
    {
      $project:{_id:1,total:1} 
    },
    {
        $sort:{total:1}
    },
    {
        $skip:1
    },
    {
        $limit:2
    }
    ])
