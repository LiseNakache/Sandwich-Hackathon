var mongoose = require('mongoose');
var Schema = mongoose.Schema

var sandwichSchema = new mongoose.Schema ({
    username : String,
    ingredients : [ingredientsSchema],
    sauce : [sauceSchema]
})

var Sandwich = mongoose.model("sandwich",sandwichSchema)

module.exports = Sandwich
