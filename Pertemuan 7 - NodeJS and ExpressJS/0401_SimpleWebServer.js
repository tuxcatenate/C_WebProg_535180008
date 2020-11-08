const port = 3000, //choose port but make sure the port is unused by other services/apps

    http = require("http"), // import module http

    httpStatus = require("http-status-codes"), //import module http-status-codes NodeJS untuk return kode status protokol http

    //receives request and response argument, return desired text back to browser and display it
    app = http.createServer((request, response) => {
        console.log("Receiving an incoming request...");
        //HTTP Header
        response.writeHead(httpStatus.OK, { "Content-Type" : "text/html"});
        //body response content
        let = responseMessage = "</h1>Hello, World</h1>";
        //pass the response message
        response.write(responseMessage);
        //close response then immediately send response to browser
        response.end();

        console.log("Sent a response: ${responseMessage}");   
    });

app.listen(port);

console.log(`The server has started and is listening on port number : ${port}`);