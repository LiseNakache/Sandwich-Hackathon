var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Sandwich = require('./models/sandwichModel');
var User = require('./models/userModel');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/SandwichDB', function() {
    console.log("DB connection established!!!");
  })

//=====================================
//SEED DB, REMOVE AFTER DEPLOY
//====================================

// var user1 = new User({
//   username: "RoxyNFoxy001"
// });

// user1.sandwich.push({breads:["White Bread"],meats:["Turkey", "Salami"],cheeses:["Provolone"], veggies:["Tomatoes", "Lettuce", "Black Olives"], sauces:["French"]});
// user1.save(function(err, data){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })
// console.log(user1);


  app.use(express.static('public'));
  app.use(express.static('node_modules'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));

//Login-Create Account
app.post("/", function(req, res){
  var user = new User(req.body);
  user.save(function(err, user){
    if(err){
      console.log(err);
    } else {
      console.log(user);
      res.send(user);
    }
  });
});

//GET Sandwhich page
app.get("/:id/ingredients", function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log(err)
    } else {
      res.send(user);
    }
  });
});

//PUT choose sanwhich options, changing to user
app.put("/:id/ingredients", function(req, res){
  User.findById(req.user._id).then(function(user){
    var sandwich = new Sandwich(req.body);
    user.sandwich.push(sandwich);
    user.save(function(err, sandwich){
      if(err){
        console.log(err)
      } else {
        res.send(user);
      }
    })
  })
})

app.listen(port);
console.log("=================");
console.log("I am a working on Sandwhich " + port);
console.log("=================");