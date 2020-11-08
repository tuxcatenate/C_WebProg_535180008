//common command fromat : fs.open(path, flags[, model], callback)
//where path = file string name including path, flag = file behaviour, mode = set permission mode
//callback = callback function that receives 2 args (err, fd)

var fs = require("fs");

// Asynchronous - Opening File
console.log("Ready to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened sucessfully!");
});