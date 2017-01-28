
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
//custom.js for Tattoo Design webpage//

$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow");
});

//menu closes on scroll with function below//
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.menu').fadeOut();
     }
 });

//makes hamburger menu black on page2//

$( ".hamburger" )
  .on( "mouseenter", function() {
    $(".hamburger").css({
      "color": "yellow",
      "font-weight": "bolder"
    });
  })