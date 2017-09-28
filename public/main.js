var users = [];

//click handlers

function store_the_name(username) {
    $.ajax({
        method: "POST",
        url: "/",
        data: { username: username },
        dataType: "json",
        success: function(result) {
            console.log(result);
            users.push({username: username, result:result._id, sandwich: []});
            // console.log(users)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('err')
            console.log(textStatus)
        }
    });
}

function getIngrPage(id){
    $.ajax({
        method: 'GET',
        url: "/" + id +'/ingredients',
        success: function(data){
            console.log(data);
            users = data;
            // renderIngreients();
          },
          error: function(xhr, status, error){
            console.log(status, err.toString())
          }
    })
}
// getIngrPage();

function addIngr(index, ingredientsBread) { 
    $.ajax({
        method: 'POST',
        url: "/" + users[index]._id +'/ingredients',
        data: { breads: ingredientsBread },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            users.sandwich.push({bread: ingredientsBread});
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    })
};

// function getCheckout(){
//     var source = $("#checkout-template").html();
//     var template = Handlebars.compile(source);
//     for(var i = 0; i < users._id)
// }


var getusername = function(the_button) {
    var inputUsername = $(the_button).siblings("#the_user_name")
    if (inputUsername.val() === "") {
        alert("Please tell us your name so we can move on and feed you!");
    } else {
        var the_user_name = inputUsername.val();
        store_the_name(the_user_name);
        // addPost($input.val());
        // $input.val("");
    }


}
//click handlers
$('#submit').on('click', function() {
    var inputUsername = $(this).siblings("#the_user_name")
    var the_user_name = inputUsername.val();
    getusername(this)

})

// $(".ingredient").on("click", function(){
//     alert("I was clicked");
//     var ingredients = $(this)
// })

$('.food-type').on('click', '.btn-dropdown', function () {
    alert('hey');
    var sandIngred = $(this).closest('.ingredient').data('value');
    console.log(sandIngred);
    // var textIngredientChange = $(this).parents('.dropdown').find('.btn').html($(this).text());
    // var inputIngredientChange = $(this).parents('.dropdown').find('.btn').val($(this).data('value'))
    // var ingredientsBread = $(this).closest('.data'value');
    //AJOUTER ICI LES AUTRES VAL DES INGREDIENTS
    // addIngr(ingredientsBread);
});

$(".submit-order").on("click", function(){
    alert("I was clicked to submit order")
})





//extras click handlers
$('.carousel').carousel({
    interval: 2000
})

$('.carousel-indicators').on('click', function() {
    (this).carousel('next');
})