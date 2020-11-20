//insertOne() untuk menambahkan sebuah data ke dalam Collections di Databse MongoDB
//data disiapkan dalam format JSON
//https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/
const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://127.0.0.1:27017", //DB Url
    dbName = "db-untar-cafe"; //db name

MongoDB.connect(dbURL, (error, client) => {
    if(error) throw error;
    let db = client.db(dbName);
    db.collection("untar-cafe")
        //JSON format
        .insertOne({
            menu: "Earl Grey",
            description: "Tea. Earl Grey. Hot",
            price: 18000,
            isavailable: true
        }, (error, db) => {
            if (error) throw error;
            console.log(db);
        })
});
/*setelah eksekusi , cek data yang telah diinput masuk atau tidak dengan metode:
1. menjalankan Find.js 
2.merefresh MongoDB compass 
*/