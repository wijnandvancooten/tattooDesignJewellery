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

<<<<<<< HEAD
 //hamberger changes color when on a whit bachground//
 

=======
//makes hamburger menu black on page2//

$( ".hamburger" )
  .on( "mouseenter", function() {
    $(".hamburger").css({
      "color": "yellow",
      "font-weight": "bolder"
    });
  })
>>>>>>> master
