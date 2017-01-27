

var values = ['price'];
var names = ['product'];

$('.ui-btn').click(function() {
    values.push($(this).attr('name'));
    names.push($(this).val());
        console.log(values)
        console.log(names)
});

$("button.shopButton").click(function() {
    $("div.switch").toggleClass("shoppingCart");
});