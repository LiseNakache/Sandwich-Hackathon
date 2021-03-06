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



app.get('/', function (request, response) {
    response.sendFile(__dirname + './create.html');
});


//Login-Create Account
app.post('/homepage', function (req, res) {
    var user = new User(req.body);
    user.save(function (err, username) {
        if (err) { res.send(err) }
        res.send(username);
        console.log('the username was saved')
    })
});


app.post('/homepage/:id/ingredients', function (req, res) {
    console.log(req.params.id)
    var sandwich = new Sandwich(req.body)

    User.findById(req.params.id, function (err, username) {
        console.log(username)
        username.sandwich.push(sandwich)
        if (err) { res.send(err) };
        res.send(username);
        console.log("the ingredient was added to the user")
    });
})


//READY MADE
app.post('/homepage/:id/madeSandwich', function (req, res) {
    console.log(req.params.id)
    var madeSandwich = new MadeSandwich(req.body)

    User.findById(req.params.id, function (err, username) {
        console.log(username)
        username.madeSandwich.push(madeSandwich);
        if (err) { res.send(err) }
        res.send(username);
        console.log("the sandwich was added to the post")
    })
})

//GET Sandwhich page
app.get("/:id/ingredients", function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            res.send(user);
        }
    });
});

//PUT choose sanwhich options, changing to user
app.put("/:id/ingredients", function (req, res) {
    User.findById(req.user._id).then(function (user) {
        var sandwich = new Sandwich(req.body);
        user.sandwich.push(sandwich);
        user.save(function (err, sandwich) {
            if (err) {
                console.log(err)
            } else {
                res.send(user);
            }
        })
    })
})





//GET ready made sanwhiches
app.get("/:id/readymade", function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.send(user)
        }
    })
})

app.put("/:id/readymade", function (req, res) {
    User.findById(req.user._id)
})

app.listen(port);
console.log("=================");
console.log("I am a working on Sandwhich " + port);
console.log("=================")