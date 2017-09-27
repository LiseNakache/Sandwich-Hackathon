var mongoose = require('mongoose');
var sandwichSchema = require('./sandwichModel.js').schema;


var userSchema = new mongoose.Schema ({
    username : String,
    sandwich : [sandwichSchema]
})

var User = mongoose.model("user",userSchema)

module.exports = User