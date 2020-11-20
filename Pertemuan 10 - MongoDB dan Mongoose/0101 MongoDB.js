//import module mongodb dan buat instance MongoClient()
var MongoClient = require('mongodb').MongoClient;
//specify URL database untuk dikoneksikan
var url = "mongodb://127.0.0.1:27017/db-untar-cafe";

//gunakan { useUnifiedTopology: true } untuk fitur yang deprecated
MongoClient.connect(url, { useUnifiedTopology: true } ,function (err, db){
    if (err) {
        throw err;
    } else {
        console.log("Connected!");
    }
    db.close();
});