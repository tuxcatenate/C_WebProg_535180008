/*
Mongoose adalah Object-Document Mapper (ODM) 
yang bertugas untuk menjalankan perintah MongoDB dengan mempertahankan struktur berorientasi objek aplikasi Anda. 

"Seperti dikatakan sebelumnya untuk memudahkan pemodelan data di MongoDB
 anda bisa memakai pustaka Mong
 Meskipun sebenarnya Mongoose memakai objek JavaScript biasa dan mendukung banyak metode query data tetapi
  yang paling membedakan adalah Mongoose mendukung schema type dan validasi di level schema."
source: https://idjs.github.io/belajar-nodejs/database/mongoose.html
*/

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

