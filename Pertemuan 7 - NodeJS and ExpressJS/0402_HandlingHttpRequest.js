//handling request,
//jika laman di refresh maka fungsi callback tidak dipanggil berkali kali
/*Pemisahan source code fungsi buat server dan response untuk mendukung tujuan diatas*/
const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

app.on("request", (req, res) => {
    res.writeHead(httpStatus.OK, {
        "Content-Type" : "text/html"
    });
    let responseMessage = "<h1>This content will be shown on the browser screen</h1>";
    res.end(responseMessage);
});

app.listen(port);

console.log(`The server has started and is listening on port number: ? ${port}`);