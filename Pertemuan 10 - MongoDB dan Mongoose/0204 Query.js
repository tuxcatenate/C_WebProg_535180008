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
findOne()
Returns one document that satisfies the specified query criteria 
on the collection or view. If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.
In capped collections, natural order is the same as insertion order. If no document satisfies the query, the method returns null.
*/
var myQuery = Member.findOne({
    name: "Starship Enterprise"
}).where("email",/boldly/);
myQuery.exec((error, data) => {
    if(data) console.log(data.name);
});