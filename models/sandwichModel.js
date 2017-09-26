var mongoose = require('mongoose');

var sandwichSchema = new mongoose.Schema ({
    ingredients : [String],
    sauces : [String]
})


var Sandwich = mongoose.model("sandwich",sandwichSchema)

module.exports = Sandwich
