//membuat http web server dengan module http dan menjalankannya
//serving a simple html page content 

//global JS variable scope, ES6 JS feature using 'var'
var http = require("http");

http.createServer(function (request, response) {
    //send HTTP header
    // Http status code : 200 OK
    //content type : text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the reponse body as "Hello World"
    response.end('Hello World Server\n');
}).listen(8081); //memakai port yang bebas, asal tidak direserve oleh service/aplikasi lain

//Console will print msg
console.log('Server running at localhost http://127.0.0.1:8081/');




