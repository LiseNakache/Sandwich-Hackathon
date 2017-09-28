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

mongoose.connect('mongodb://localhost/SandwichDB', function() {
    console.log("DB connection established!!!");
})



app.get('/', function (request, response) {
  // response.sendFile(__dirname + './index.html');
});



//Login-Create Account
app.post("/", function(req, res) {
    var user = new User(req.body);
    user.save(function(err, username) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
            res.send(username);
        }
    });
});

//GET Sandwhich page
app.get("/homepage/:id/ingredients", function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err)
        } else {
            res.send(user);
            res.sendFile(__dirname + '/create.html');
        }
    });
});

//PUT choose sanwhich options, changing to user
app.post("/homepage/:id/ingredients", function(req, res) {
    User.findById(req.user.id).then(function(username) {
        var sandwich = new Sandwich(req.body);
        username.sandwich.push(sandwich);
        username.save(function(err, sandwich) {
            if (err) {
                console.log(err)
            } else {
                res.send(sandwich);
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
app.get("/:id/readymade", function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.send(user)
        }
    })
})

app.put("/:id/readymade", function(req, res) {
    User.findById(req.user._id)
})

app.get("/:id/checkout", function(req, res){
    User.findById(req.params.id, function(err, user){
        if(err){
            console.log(err)
        } else {
            console.log(user);
            res.send(user)
        }
    })
});

    app.listen(port);
    console.log("=================");
    console.log("I am a working on Sandwhich " + port);
    console.log("=================")