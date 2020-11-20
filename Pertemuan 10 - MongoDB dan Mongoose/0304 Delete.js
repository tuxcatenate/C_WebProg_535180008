/*
Terdapat 2 fungsi untuk melakukan penghapusan data, yaitu deleteOne() dan deleteMany(). 
Fungsi ini membutuhkan 2 parameter, yaitu filter untuk pencarian data; dan fungsi callback yang digunakan untuk menjalankan perintah setelah fungsi delete selesai dijalankan. 
*/
//CRUD -- Delete Operation
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

Member.deleteMany({name: "Starship Enterprise"}, (err, data)=>{

    Member.findOne({ name: "Starship Enterprise"}).exec((error, data) => {
        if(data) console.log("Find One: " + JSON.stringify(data));
    });
});