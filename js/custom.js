//custom.js for Tattoo Design webpage//

/*** JS for Navigation ***/
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow");
});

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
