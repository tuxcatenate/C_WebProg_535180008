//Asycn function received callback as final parameter
//callback function received error as first parameter

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log('Program ended');