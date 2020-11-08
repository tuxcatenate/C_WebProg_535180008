//import expressJS from Node
var express = require('express')

var app = express()

app.use(express.static('public'));

//create an async callback
app.get('/',function(req,res){
    //write annd show data to browser
    //use method sent
    //for testing purpose only
    res.send('Hello World')
})


//tentukan port

app.listen(3000)