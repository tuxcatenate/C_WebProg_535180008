//CRUD -- update operation
/*
Update menerima 3 parameter, yaitu filter untuk mencari data; 
field yang diubah beserta valuenya; dan fungsi callback yang dijalankan setelah selesai menjalankan update, seperti pada fungsi save(). 
*/
const mongoose = require("mongoose");
mongoose.connect(
    //specify DB URL
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;
/*
db.once,
event will be called only once i.e 
the first time the event occurred like here in this case the first time when the connection is opened 
*/
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose ODM!");
});

const Member = require("./models/Member");

/*updateOne() Collcetion method references : 
https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/ */

Member.updateOne({name: "Starship Enterprise"}, { credit:1031000}, (err, data)=>{

    Member.finOne({ name: "Starship Enterprise"}).exec((error, data) => {
        if(data) console.log("Find: " + JSON.stringify(data));
    });
});