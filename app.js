
var express = require('express'),// get express refrence
    mongoose = require('mongoose');
    bodyParser = require('body-parser');
    
    //test DB
    mongoose.connect("mongodb://localhost/bookAPI");
    db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function callback(){
        console.log("CONNECTED");
    });
    var app = express();//create instrace of express   
   
    app.use(bodyParser.urlencoded({extended:true}));// //bodyparser allows express to read the body and then parse it into a JSON object that we can understand.
    app.use(bodyParser.json());

    var port = process.env.PORT || 8000; //setup port in order to set up server
//other ways of routing 

var Books = require('./models/bookModel');
bookRouter = require('./Routes/bookRoutes')(Books)

app.use('/api/Books', bookRouter);

//Set up a handler for a rout => '/' means route of site, anyting hits '/' function will get execute
app.get('/', function (req, res) {
    res.send('Welcome to may API!')

});
// Listing  port
app.listen(port, function () {
    console.log('Gulp is Running on PORT ' + port)
})