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

mongoose.connect('mongodb://localhost/SandwichDB', function () {
  console.log("DB connection established!!!");
})

// var user1 = new User({
//     username: "RoxyNFoxy001"
//   });
  
//   user1.sandwich.push({breads:["White Bread"],meats:["Turkey", "Salami"],cheeses:["Provolone"], veggies:["Tomatoes", "Lettuce", "Black Olives"], sauces:["French"]});
//   user1.save(function(err, data){
//     if(err){
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   })
//   console.log(user1);

app.get('/', function (request, response) {
  // response.sendFile(__dirname + './index.html');
});


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
  })



//GET ready made sanwhiches
app.get("/:id/readymade", function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log(err);
    } else {
      res.send(user)
    }
  })
})

app.put("/:id/readymade", function(req,res){
  User.findById(req.user._id)
})

    app.listen(port);
    console.log("=================");
    console.log("I am a working on Sandwhich " + port);
    console.log("=================")