//custom.js for Tattoo Design webpage//

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
//makes hamburger menu yellow on page2//

$( ".hamburger" )
  .on( "mouseenter", function() {
    $(".hamburger").css({
      "color": "yellow",
      "font-weight": "bolder"
    });
  })