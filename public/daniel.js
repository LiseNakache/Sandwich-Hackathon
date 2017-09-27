// $('.carousel').carousel()
console.log("hello");





function addPost(input_text) {
    $.ajax({
        type: "POST",
        url: "/",
        data: { text: input_text },
        success: function(newPost) {
            if (newPost) {
                console.log("this is your post " + newPost);
                //save this post inside the posts array
                //render the posts array on the screen
                // posts.push({ text: newPost, comments: [] });
                // _renderPosts();
                posts.push(newPost);
                _renderPosts();

            } else {
                console.log("there was an error !");
            }
        }
    });
}

$('#submit').on('click', function() {
    getusername(this)
})

var getusername = function(the_button) {

    var inputUsername = $(the_button).siblings("#the_user_name")
    if (inputUsername.val() === "") {
        alert("Please tell us your name so we can move on and feed you!");
    } else {
        var the_user_name = inputUsername.val();

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