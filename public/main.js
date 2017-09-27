var users = [];

//click handlers


//HOMEPAGE
function store_the_name(username) {
    $.ajax({
        method: "POST",
        url: "/",
        data: { username: username },
        dataType: "json",
        success: function (result) {
            console.log(result);
            users.push(result);
            console.log(users)
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
        inputUsername.val("");
    }
}

//INGREDIENTS PAGE
function addIngr(ingredientsBread,index) { //AJOUTER ICI LES AUTRES INGREDIENTS
    var id = users[users.length -1]._id;
    $.ajax({
        method: 'POST',
        url: '/' + id +'/ingredients',
        data: { breads: ingredientsBread },//AJOUTER ICI LES AUTRES INGREDIENTS ,
        dataType: 'json',
        success: function (ingredientsAdded) {
            alert(ingredientsAdded);
            users[index] = thisPost
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    })
};

//READY MADE SANDWICH PAGE
function addMadeSandwichToDB(sandwichName) {
    $.ajax({
        method: 'POST',
        url: '/madeSandwich',
        data: { name: sandwichName },
        dataType: "json",
        success: function (madesandwich) {
            console.log(madesandwich);
            users.madeSandwich.push(sandwichName)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('err')
            console.log(textStatus)
        }
    })
}

//SUM UP PAGE
function addMadeSandwichToDB(sandwichName) {
    $.ajax({
        method: 'GET',
        url: '/madeSandwich',
        dataType: "json",
        success: function (sumUp) {
            users = sumUp
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('err')
            console.log(textStatus)
        }
    })
}





//click handlers


$('#submit').on('click', function () {
    // var index = inputUsername.index();
    getusername(this)
})

$('.bread-sand').on('click', '.btn-dropdown', function () {
    alert('hey')
    // var textIngredientChange = $(this).parents('.dropdown').find('.btn').html($(this).text());
    // var inputIngredientChange = $(this).parents('.dropdown').find('.btn').val($(this).data('value'))
    var ingredientsBread = $(this).closest('.data('value');
    //AJOUTER ICI LES AUTRES VAL DES INGREDIENTS
    addIngr(ingredientsBread);
});

$('.pick-btn').click(function () {
    var sandwichName = $(this).closest('.title').data('value')
    addMadeSandwichToDB(sandwichName);
})






//extras click handlers
$('.carousel').carousel({
    interval: 2000
})

$('.carousel-indicators').on('click', function () {
    (this).carousel('next');
})