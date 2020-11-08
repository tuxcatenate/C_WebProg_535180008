//simple routing NodeJS
//routing menggunakan struktur data Dictionary 
//Dictionary dengan Key:Value

//define subpath 
/*jika user mengetikkan subpath yang telah ditentukan,
maka akan langsung dialihkan ke konten yang telah ditentukan dibawah*/
const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn more about us</h1>",
    "/hello": "<h1>Say hello by reaching us by email</h1>",
    "/error": "<h1>Sorry the page you are looking for isn't here</h1>",
};

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        //jika request URL mengandung subpath seperti didalam routeResponseMap
        if(routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
        } else { //page awal standar tanpa subppath
            res.end("<h1>Welcome!</h1>");
        }

    });

    app.listen(port);

    console.log(`The server has started, listening on port:? ${port}`);
    