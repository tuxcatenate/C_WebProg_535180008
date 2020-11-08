const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

const getJSONString = obj => {
    //stringify untuk mengubah object ke format JSON
    return JSON.stringify(obj, null, 2);
};

app.on("request", (req, res) => {

    var body = []; //null array, untuk menyimpan request yang diterima

    req.on("data", (bodyData) => {
        body.push(bodyData); //simpan request yang diterima menuju array
    });

    //tampilkan ke console terminal menggunakan fungsi Buffer() nodejs
        //Buffer untuk menangani binary data selain tipe data string saja
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log('Request Body Contents: ${body}');
    });

    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`URL: ${getJSONString(req.headers)}`);
    res.writeHead(httpStatus.OK, { "Content-Type" : "text/html"});

    let responseMessage = "<h1>This will show on the screen.</h1>";
    res.end(responseMessage);

});
app.listen(port);