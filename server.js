var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Sandwich = require('./models/sandwichModel');
var User = require('./models/userModel');
var MadeSandwich = require('./models/madeSandwichModel');
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))


app.get('/', function (request, response) {
  response.sendFile(__dirname + './index.html');
});

mongoose.connect('mongodb://localhost/SandwichDB', function () {
  console.log("DB connection established!!!");
})


app.post(':id/madeSandwich', function (req, res) {
  User.findById(req.params.id, function (err, thisUser) {
    if (err) { res.send(err) };
    thisUser.madeSandwich.push(req.body);
    thisUser.save(function (err, sandwichAdded) {
      if (err) { res.send(err) }
      res.send(thisUser);
      console.log("the sandwich was added to the post : " + thisUser)
      })
    })



    app.listen(port);
    console.log("=================");
    console.log("I am a working on Sandwhich " + port);
    console.log("=================");