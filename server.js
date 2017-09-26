var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/SandwichDB', function() {
    console.log("DB connection established!!!");
  })

  app.use(express.static('public'));
  app.use(express.static('node_modules'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'))

app.listen(port);
console.log("=================");
console.log("I am a working on Sandwhich " + port);
console.log("=================");