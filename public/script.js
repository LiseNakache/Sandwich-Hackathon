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

