var mongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nirobdb:nirobdb@cluster0.jw2lu.mongodb.net?retryWrites=true&w=majority";
var config = {useUnifiedTopology: true};

mongoClient.connect(url, config, function (error, myMongoClient){
   if (error){
       console.log("Connection Fail");
   } else{
       console.log("Connection Success");
       insertData(myMongoClient);
   }
});

function insertData(myMongoClient){
    var catchDatabase = myMongoClient.db('school');
    var catchTable =  catchDatabase.collection('students');

    var data = {
        name:"Nirob",
        roll:"01",
        class:"Ten",
        city:"Dhaka"
    }
    catchTable.insertOne(data, function (error){
        if (error){
            console.log("Data Insert Fail");
        } else{
            console.log("Data Insert Success");
        }
    })
}
