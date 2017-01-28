//custom.js for Tattoo Design webpage//

/*** JS for Navigation ***/
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow");
});

/*** JS for Shopping Grid ***/
$(".shopping_list_item img").click(function(){
  $(".preview").css({ 'display' : 'block' });
});

$(".preview_img").click(function(){
  $(".preview").css({ 'display' : 'none' });
});
