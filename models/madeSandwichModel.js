var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var madeSandwichSchema = new mongoose.Schema({
    name : [String]
});

var MadeSandwich = mongoose.model('madeSandwich',madeSandwichSchema);


module.exports = MadeSandwich;
