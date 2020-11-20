//Find() atau db.collection.find() untuk mencari data di collections
/*
https://docs.mongodb.com/manual/reference/method/db.collection.find/
*/
//pastikan collections telah ada di DB terlebih dahulu
const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://127.0.0.1:27017", //DB Url
    dbName = "db-untar-cafe"; //db name

    MongoDB.connect(dbURL,  { useUnifiedTopology: true } ,(error, client) => {
        if(error) throw error; //check error return
        let db = client.db(dbName);
        db.collection("untar-cafe")
            .find()
            /*
            https://docs.mongodb.com/manual/reference/method/cursor.toArray/
            The toArray() method returns an array that contains 
            all the documents from a cursor. The method iterates completely the cursor,
             loading all the documents into RAM and exhausting the cursor.
            */
            .toArray((error, data)=>{
                if(error) throw error;
                console.log(data); //print query JSON yang telah didapat ke terminal
            });
    });