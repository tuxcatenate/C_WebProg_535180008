//BAGIAN CRUD
//Create Operation
//Untuk memasukkan record, atau dokumen ke dalam koleksi, gunakan metode save(). Metode Save() membutuhkan 2 parameter yaitu Error, dan Product.
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

var member_to_insert = new Member({
    name: "Space The Final Frontier",
    email: "these-are@the-voyages.com",
    credit: 1701000
});

member_to_insert.save((err, product) => {
    if(err) console.log(err);
    console.log(JSON.stringify(product));
});
