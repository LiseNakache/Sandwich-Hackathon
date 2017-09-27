var users = [];


function store_the_name(username) {
    $.ajax({
        method: "POST",
        url: "/",
        data: { username: username },
        dataType: "json",
        success: function(result) {
            console.log(result);
            users.push(result);
            console.log(users)
        },
        err: function() {

            console.log(err)
        }
    });
}

$('#submit').on('click', function() {
    var inputUsername = $(this).siblings("#the_user_name")
    var the_user_name = inputUsername.val();
    getusername(this)
    store_the_name(the_user_name)
})


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

$('.carousel').carousel({
    interval: 2000
})

$('#submit').on('click', function() {
    getusername(this)
})

$('.carousel-indicators').on('click', function() {

    (this).carousel('next');


})