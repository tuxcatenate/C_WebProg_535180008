/*
Untuk menghindari data yang tidak konsisten, di mana beberapa dokumen memiliki field email dan yang lainnya tidak, misalnya, Anda dapat membuat skema yang menyatakan bahwa semua objek kontak harus memiliki bidang email untuk disimpan ke database. 

Karena Anda ingin menyimpan member untuk café, maka perlu dibuat skema 
untuk pelanggan member. Schema dapat memiliki konstruktor yang digunakan untuk membuat objek skema dengan parameter yang diberikan. Kemudian tambahkan properti
 objek untuk menyatakan nama field objek dan tipe datanya. Misalnya, nama seseorang tidak boleh angka. 
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

const memberSchema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number
});

//Models are responsible for creating and reading documents from the underlying MongoDB database. 
//https://mongoosejs.com/docs/models.html
const Member = mongoose.model("Member", memberSchema);

/*
Model yang sudah dibentuk ini dapat digunakan untuk membuat data berdasarkan Schema yang sudah dibuat, 
kemudian disimpan ke database. 
*/

//buat objek dulu baru simpan ke db
//separasi antara objek dengan fungsi save
var member1 = new Member({
    name: "Space The Final Frontier",
    email: "these-are@the-voyages.com"
});
member1.save((error, savedDocument)=>{
    //shortify if condition without bracket
    if(error) console.log(error);
    console.log(savedDocument);
});

//cara2 : proses simpen bisa langsung bersamaan dengan buat objek
Member.create(
    {
        name: "Starship Enterprise",
        email: "to-boldly-go@no1hasgonebefore.com",
        credit: 1701000
    },
    function (error, savedDocument) {
        if(error) console.log(error);
        console.log(savedDocument);
    }
);