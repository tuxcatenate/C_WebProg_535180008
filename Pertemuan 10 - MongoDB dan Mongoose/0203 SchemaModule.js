/*
setelah memiliki cara untuk menyimpan data dalam bentuk model Mongoose, sebaiknya model dipisahkan sehingga tidak tercampur di file utama. Seperti memisahkan tampilan dan kontrol, 
buatlah folder model di direktori root di folder. File ini adalah tempat untuk menuliskan source code model. Pindahkan semua skema dan kode definisi model ke masing-masing file.  
*/
const mongoose = require("mongoose");
mongoose.connect(
    //specify DB URL
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose ODM!");
});

const Member = require("./models/Member");

//Type 1
var member1 = new Member({
    name: "Space The Final Frontier",
    email: "these-are@the-voyages.com"
});
member1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});