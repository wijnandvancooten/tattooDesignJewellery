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

function changeColorHamburger ()
