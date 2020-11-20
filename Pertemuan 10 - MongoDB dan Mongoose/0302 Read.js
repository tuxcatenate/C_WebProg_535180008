//CRUD -- Read Operation
//configure mongoose
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

/*
Line 15 membuat variable query, lalu dijalankan di line 16. 
Line 20 dan 24 adalah cara lain untuk menjalankan query, tanpa pembuatan variable terlebih dahulu. 

FindOne() mengembalikan hanya 1 dari hasil pencarian. Find() mengembalikan seluruh hasil pencarian. 
Where() membutuhkan parameter nama field, lalu diikuti dengan fungsi filter, misalnya gt utk Greater Than. 
*/
var FindOneQuery = Member.findOne({ name: "Starship Enterprise" })
FindOneQuery.exec((error, data) => {
    if(data) console.log("Find One : " + JSON.stringify(data));
});

Member.find({ name: "Starship Enterprise"}).exec((error, data) => {
    if(data) console.log("Find: " + JSON.stringify(data));
});

//$gt(index) = $gt selects those documents where the value of the field is greater than (i.e. >) the specified value.
Member.where('credit').gt(0).exec((error, data) => {
    if(data) console.log("Where : " + JSON.stringify(data));
});

