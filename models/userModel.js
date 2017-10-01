var mongoose = require('mongoose');
var sandwichSchema = require('./sandwichModel.js').schema;
var madeSandwichSchema = require('./madeSandwichModel.js').schema;


var userSchema = new mongoose.Schema ({
    username : String,
    sandwich : [sandwichSchema],
    madeSandwich : [madeSandwichSchema]
})

var User = mongoose.model("user",userSchema)

module.exports = User