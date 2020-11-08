//command format :
//fs.unlink(path, callback)
/*
path = nama file termasuk path
callback = fungsi callback
*/
var fs = require("fs");

console.log("Going to delete an existing file on directory")
fs.unlink('input.txt', function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("File deleted successfully");
});