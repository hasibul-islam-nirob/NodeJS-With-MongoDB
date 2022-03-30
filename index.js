var mongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nirobdb:nirobdb@cluster0.jw2lu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var config = {useUnifiedTopology: true};

mongoClient.connect(url, config, function (error){
   if (error){
       console.log("Connection Fail");
   } else{
       console.log("Connection Success");
   }
});
