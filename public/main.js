var users = [];

//HOMEPAGE
function store_the_name(username) {
    $.ajax({
        method: 'POST',
        url: '/homepage',
        data: { username: username},
        dataType: "json",
        success: function (result) {
            console.log(result);
            users.push({ username: username, result: result._id, sandwich: [] });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('err')
            console.log(textStatus)
        }
    });
}

var getusername = function (the_button) {
    var inputUsername = $(the_button).siblings("#the_user_name")
    if (inputUsername.val() === "") {
        alert("Please tell us your name so we can move on and feed you!");
    } else {
        var inputUsername = $(the_button).siblings("#the_user_name");
        var the_user_name = inputUsername.val();
        store_the_name(the_user_name);
        console.log('zoyfhtr,frt')
        inputUsername.val("");
    }
}

//INGREDIENTS PAGE
var addIngr = function (ingredientBread, ingredientMeat, ingredientCheese, ingredientVeg, ingredientSauce) {
    var id = users[users.length - 1].result;
    console.log(id)
    $.ajax({
        method: 'POST',
        url: '/homepage/' + id + '/ingredients',
        data: {
            breads: ingredientBread,
            meats: ingredientMeat,
            cheeses: ingredientCheese,
            veggies: ingredientVeg,
            sauces: ingredientSauce
        },
        dataType: 'json',
        success: function (username) {
            console.log(username)
            users[users.length - 1] = username;
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    })
};

//READY MADE SANDWICH PAGE
function addMadeSandwichToDB(sandwichName) {
    var id = users[users.length - 1].result;
    $.ajax({
        method: 'POST',
        url: '/homepage/' + id + '/madeSandwich',
        data: { name: sandwichName },
        dataType: "json",
        success: function (madesandwich) {
            console.log(madesandwich);
            // users[0].madeSandwich.push(madesandwich)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('err')
            console.log(textStatus)
        }
    })
}

//SUM UP PAGE
// function addMadeSandwichToDB(sandwichName) {
//     $.ajax({
//         method: 'GET',
//         url: '/madeSandwich',
//         dataType: "json",
//         success: function (sumUp) {
//             users = sumUp
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log('err')
//             console.log(textStatus)
//         }
//     })
// }





//click handlers


$('#submit').on('click', function () {
    alert('hey')
    // var index = inputUsername.index();
    getusername(this)
})

$('.food-type').on('click', '.btn-dropdown', function (e) {
    alert('OO')
    var ingredientBread = $(this).closest('.bread').data('value')
    var ingredientMeat = $(this).closest('.meat').data('value')
    var ingredientCheese = $(this).closest('.cheese').data('value');
    var ingredientVeg = $(this).closest('.veg').data('value');
    var ingredientSauce = $(this).closest('.sauce').data('value');
    e.preventDefault();
    addIngr(ingredientBread, ingredientMeat, ingredientCheese, ingredientVeg, ingredientSauce);
});

$('.pick-btn').click(function () {
    var sandwichName = $(this).closest('.title').data('value')
    addMadeSandwichToDB(sandwichName);
})

$('.submit-order').on('click', '.btn-submit', function () {
    alert('submit')
})




//extras click handlers
$('.carousel').carousel({
    interval: 2000
})

$('.carousel-indicators').on('click', function () {
    (this).carousel('next');
})

$(".btTxt").on('click', function () {

    alert("this button is working")
})