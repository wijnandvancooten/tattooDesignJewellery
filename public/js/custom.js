//smooth scrolling to all links.
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

//custom.js for Tattoo Design webpage//


//photo change jombotron page1//

var imageArray = ['../images/Header/Header_4.jpg', '../images/Header/Header_5.jpg'];
var imageIndex = 0;

function changeBgImage(){
    var imageUrl = "url('" + imageArray[imageIndex] + "')"
    $('.jumbotron').css('background-image', imageUrl)
    imageIndex++
    if (imageIndex >= imageArray.length) {
        imageIndex = 0
    }
}

setInterval(changeBgImage, 5000)
/*** JS for Shopping Cart ***/
var values = ['price'];
var names = ['product'];

$('.addToCart').click(function() {
    names.push($(this).attr('name'));
    values.push($(this).val());
    console.log(values)
    console.log(names)
});




/*** JS for Navigation ***/
$(".menu").hide()
$(".hamburger").click(function() {
    $(".menu").slideToggle("slow")
})
$("#contact").hide();
$("#showContact").click(function() {
    $("#contact").slideToggle("slow")
})
$(".hamburger").click(function() {
    $("#contact").hide("slow")
})
$("#contact").hide();
$(".shopButton").click(function() {
    $(".switch").slideToggle("slow")
})
$("#login").hide();
$("#showPayPage").click(function() {
    $(".switch").hide("slow")
    $("#login").slideToggle("slow")
})
// $("#payment").hide();
// $("gotopaypage").click(function() {
//     $(".switch").hide("slow")
//     $("#payment").slideToggle("slow")
// })
$(".hamburger").click(function() {
    $(".switch").hide("slow")
})

//menu's close on scroll//
$(window).scroll(function() {

    if ($(this).scrollTop() > 0) {
        $('.menu').fadeOut();
    }
});

$(window).scroll(function() {

    if ($(this).scrollTop() > 0) {
        $('#contact').fadeOut();
    }
});

$(window).scroll(function() {

    if ($(this).scrollTop() > 0) {
        $('.switch').fadeOut();
    }
});

$(window).scroll(function() {

    if ($(this).scrollTop() > 0) {
        $('.shoppingCartLook').fadeOut();
    }
});



var navColor = $('#page2').offset().top - 100;

function logScroll() {

    if ($(window).scrollTop() >= navColor) {
        $('.hamburger')
            .css('color', 'black')
    } else {
        $('.hamburger')
            .css('color', 'white')
    }
}

window.onscroll = logScroll;

/*** JS for Shopping Grid ***/
var currentProduct;

$('.shopping_list_item').click(function(self) {
    currentProduct = self.target;

    $(self.target)
        .parent('li')
        .children('div.preview')
        .addClass('example');

});

$('.preview').click(function() {
    $(this).removeClass('example');
})
