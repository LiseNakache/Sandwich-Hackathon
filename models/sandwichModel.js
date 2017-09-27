var mongoose = require('mongoose');

var sandwichSchema = new mongoose.Schema ({
    breads: [String],
    meats: [String],
    cheeses: [String],
    veggies: [String],
    sauces : [String]
});


var Sandwich = mongoose.model("sandwich",sandwichSchema)

module.exports = Sandwich
