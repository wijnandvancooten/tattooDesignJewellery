//custom.js for Tattoo Design webpage//

var navPositionY = $('.navbar').offset().top;

function logScroll(){

  if ($(window).scrollTop() >= navPositionY){
    
    $('.navbar')
      .css ('position','fixed')
      .css('top','0')
      .css ('left','0')
      .css ('z-index', '3') 
  }
  else{
     
    $('.navbar')
     .css ('position','relative')
   
  }
}