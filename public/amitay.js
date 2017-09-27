// $('.btn-dropdown').click(function() {
//     $('.dropdown').toggleClass('open');
// });

// $('.dropdown').on('hide.bs.dropdown', function () {
//     return false;
// });

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});

$('.dropdown').on('click', 'li a', function () {
    var textIngredientChange = $(this).parents(".dropdown").find('.btn').html($(this).text());
    var inputIngredientChange = $(this).parents(".dropdown").find('.btn').val($(this).data('value'))
});

var btnSubmit = $('.btn-submit').click(function (){ 
    alert('whattt');
});




