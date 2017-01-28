

var values = ['price'];
var names = ['product'];

$('.addToCart').click(function() {
    names.push($(this).attr('name'));
    values.push($(this).val());
        console.log(values)
        console.log(names)
});

$("button.shopButton").click(function() {
    $("div.switch").toggleClass("shoppingCart");
});