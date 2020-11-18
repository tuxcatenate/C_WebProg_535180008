//import module express dari nodeJS
const express = require("express");
//import module body-parser
const bodyParser = require("body-parser");
//untuk bagian dan handling sessions
const session = require('express-session'); 
//untuk bagian layouts web
const layouts = require('express-ejs-layouts'); 
const app = express();
//set view engine to EJS
//configure dan mount middleware dengan set() dab use()
app.set('view engine', 'ejs');

//menggunakan API bodyparser.urlencoded untuk memparse request body
//reference : http://expressjs.com/en/resources/middleware/body-parser.html
app.use(bodyParser.urlencoded());

//baca direktori static file , mount path folder public ke express
app.use(express.static('public')); 

//menggunakan layouts ejs ExpressJS
app.set('layout', 'layouts/main.ejs'); 
app.use(layouts); 
/*few layout configurations*/
// place all styles block in the layout at the head 
app.set("layout extractStyles", true) 
// place all scripts block in the layout at the end 
app.set("layout extractScripts", true) 

// enabling session 
app.use(session({ 
    secret: '^o0Oq]rTqYB?H@W', 
    cookie: {} 
  })); 

//routes
/*arahkan ke path direktori folder berisi file auth dan index
lalu mount ke express */
const auth = require('./routes/auth'); 
app.use('/auth', auth); 
const index = require('./routes/index'); 
app.use('/', index); 

//read todo file directory path
const todo = require('./routes/todo'); 
//add todo to expressJS 
app.use('/todo', todo); 

//start server 
app.listen(3000); 
console.log('Server runs at port 3000...'); 

