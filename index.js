var mongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nirobdb:nirobdb@cluster0.jw2lu.mongodb.net?retryWrites=true&w=majority";
var config = {useUnifiedTopology: true};

mongoClient.connect(url, config, function (error, myMongoClient){
   if (error){
       console.log("Connection Fail");
   } else{
       console.log("Connection Success");
       //insertData(myMongoClient);
       deleteOneData(myMongoClient);
   }
});

function insertData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection =  myDatabase.collection('students');

    var data = {name:"Nirob", roll:"04", class:"Ten", city:"Dhaka"}
    myCollection.insertOne(data, function (error){
        if (error){
            console.log("Data Insert Fail");
        } else{
            console.log("Data Insert Success");
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
