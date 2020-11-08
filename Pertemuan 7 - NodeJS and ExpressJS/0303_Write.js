//common fs.writefile(filename, data[, options], callback)
//options : path for file string name including path, data for String or Buffer to be written to the file
//options-{encoding, mode, flag} default encoding is utf-8
//mode is in octal 0666
//callback = callback function with 1 error parameter to return message when error is occured while writing

var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
    if(err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile('input.txt', function (err, data) {
        if(err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});
