var mongoose = require('mongoose');  
var bookModel = new mongoose.Schema({  
    title:  String,
    author:String,
    genre :String,
    read :Boolean
});
//mongoose.model('Books', bookModel);
module.exports =  mongoose.model("Model", bookModel, "Books");

