//for writing a file
//fs.read(fd, buffer, offset, length, position, callback)
/*
    fd = deskriptor file yang dikembalikan oleh fs.open()
    buffer = tempat data akan ditulis
    offset = offset dalam buffer untuk mulai menulis
    length = bilangan bulat yang mennetukan jumlah byte untuk dibaca
    position = bilangan bulat yang menentukan dari mana harus mulai membaca file. Jika
    posisi nol, data akan dibaca dari posisi file saat ini.
    callback = fungsi callback yang mendapatkan tiga argumen berupa (err, bytesRead, buffer).
*/
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd){
    if(err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err){
            console.log(err)
        }
        console.log(bytes + "bytes read");

        // Print only read bytes to avoid junk.
        if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
});