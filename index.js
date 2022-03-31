var mongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nirobdb:nirobdb@cluster0.jw2lu.mongodb.net?retryWrites=true&w=majority";
var config = {useUnifiedTopology: true};

mongoClient.connect(url, config, function (error, myMongoClient){
   if (error){
       console.log("Connection Fail");
   } else{
       console.log("Connection Success");
       //insertData(myMongoClient);
       //deleteOneData(myMongoClient);
       //deleteManyData(myMongoClient);
       //findOneDataWithoutCondition(myMongoClient);
       //findOneDataWithCondition(myMongoClient);
       //AllData(myMongoClient);
       //AllDataUsingProjection(myMongoClient);
       //SelectDataByQuery(myMongoClient);
       FindDataByLimit(myMongoClient);
   }
});

// Insert data
function insertData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection =  myDatabase.collection('students');

    var data = {name:"Nirob", roll:"05", class:"Ten", city:"Dhaka"}
    myCollection.insertOne(data, function (error){
        if (error){
            console.log("Data Insert Fail");
        } else{
            console.log("Data Insert Success");
        }
    })
}


//Find Data Using Limit
function FindDataByLimit(myMongoClient){
    var myDatabase = myMongoClient.db("school");
    var myCollection = myDatabase.collection('students');

    myCollection.find().limit(3).toArray(function (error, result){
        console.log(result);
    })

}


//Find Data Using Query
function FindDataByQuery(myMongoClient){
    var myDatabase = myMongoClient.db("school");
    var myCollection = myDatabase.collection('students');

    var Query = {city:"Dhaka"}
    myCollection.find(Query).toArray(function (error, result){
        console.log(result);
    })

}


//Find Data Using Projection Not Working
function AllDataUsingProjection(myMongoClient){
    var myDatabase = myMongoClient.db("school");
    var myCollection = myDatabase.collection('students');

    var itemObj = {}
    var projectionItems = {
        projection:{roll :" "}
    }

    myCollection.find(itemObj, projectionItems).toArray(function (error, result){
        console.log(result);
    })

}

//Find All Data
function AllData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('students');

    myCollection.find().toArray(function (error, result){
        if (error){
            console.log("Data Not Selected");
        } else{
            console.log(result);
        }
    })

}

//Find One Data With Condition
function findOneDataWithCondition(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('students');

    var findItemObj = {roll:"05"}
    myCollection.findOne(findItemObj, function (error, result){
        if (error){
            console.log("Data Not Selected");
        } else{
            console.log(result);
        }
    })
}

//Find One Data Without Condition
function findOneDataWithoutCondition(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('students');

    var findItem = {}
    myCollection.findOne(function (error, result){
        if (error){
            console.log("Data Not Selected");
        } else{
            console.log(result);
        }
    })
}


// Data Delete Using 'deleteOne' Method
function deleteOneData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('students');

    var deleteItem = {roll:"03"}
    myCollection.deleteOne(deleteItem, function (error){
        if (error){
            console.log("Data Delete Fail");
        } else{
            console.log("Data Delete Success");
        }
    })
}

// Data Delete Using 'deleteMany' Method
function deleteManyData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('students');

    myCollection.deleteMany(function (error, ResultObj){
        if (error){
            console.log("Data Delete Fail");
        } else{
            console.log(ResultObj.deletedCount +" Item's Delete Successful");
        }
    })
}