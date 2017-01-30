//custom.js for Tattoo Design webpage//
/*** JS for Shopping Cart ***/
var values = ['price'];
var names = ['product'];

$('.addToCart').click(function() {
    names.push($(this).attr('name'));
    values.push($(this).val());
        console.log(values)
        console.log(names)
});

//$(".shopButton").click(function() {
//    $("div.switch").toggleClass("shoppingCart");
//});

/*** JS for Navigation ***/
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow");
});
$( "#contact" ).hide();
$( "#showContact" ).click(function() {
$( "#contact" ).slideToggle( "slow");
});
$( ".hamburger" ).click(function() {
$( "#contact" ).hide( "slow");
});
$( "#contact" ).hide();
$( ".shopButton" ).click(function() {
$( ".switch" ).slideToggle( "slow");
});
$( ".hamburger" ).click(function() {
$( ".switch" ).hide( "slow");
});

//menu's close on scroll//
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.menu').fadeOut();
     }
 });

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#contact').fadeOut();
     }
 });

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.switch').fadeOut();
     }
 });

// switch hamburger color when enter page2
 var navColor = $('#page2').offset().top - 100;

 function logScroll(){

  if ($(window).scrollTop() >= navColor){
    $('.hamburger')
      .css('color','black')
      .css('')
  }
  else{
    $('.hamburger')
     .css ('color','white')
  }
 }

/*** JS for Shopping Grid ***/
  var currentProduct;

  $('.shopping_list_item').click(function(self){
    currentProduct = self.target;

    $(self.target)
      .parent('li')
        .children('div.preview')
          .addClass('example');

  });

  $('.preview').click(function(){
    $(this).removeClass('example');
  })
