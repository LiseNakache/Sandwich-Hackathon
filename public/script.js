


// function addSandwich() {
//     var sandwichChosen = {
//         madeSandwich: [],
//         breads: [],
//         meats: [],
//         cheeses: [],
//         veggies: [],
//         sauces: []
//     }
// return sandwichChosen;
//     // sandwiches.push(sandwichChosen);
// }

// $('.sandwich-explanation').on('click', '.pick-btn', function () {
//     pickSandwich(this)
// })

// // var addSandwich = function () {
// //     var createSandwich = sandwichObj();
// //     sandwiches.push(createSandwich)
// // }


// var pickSandwich = function (pickbtn) {
// var sandwich = $(this).closest('.title').find('.title').val($(this).data('value'))
//     sandwiches.madeSandwich.push(sandwich)
// }

var sandwiches = []



$('.pick-btn').click(function () {
    var sandwichName = $(this).closest('.title').data('value')
    addMadeSandwichToDB(sandwichName);
})

function addMadeSandwichToDB(sandwichName) {
    $.ajax({
        method: 'POST',
        url: '/madeSandwich',
        data: { name: sandwichName },
        dataType: "json",
        success: function (madesandwich) {
            console.log(madesandwich);
            sandwiches.push(sandwichName)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('err')
            console.log(textStatus)
        }
    })
}

