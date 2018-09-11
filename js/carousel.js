/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function(){

    /* Navbar */
     $('.sidenav').sidenav();

    /* Carousel */
    $('.carousel').carousel();

    /* Modal in event fixed button */
    $('.modal').modal();
    $('#modal2').modal('open');
    $('#modal3').modal('open');

    /*Partners Carousel*/
    $('.info-partner .parallax-container .carousel-partner .carousel').carousel({fullWidth: true});
    setInterval(function() {
    $('.info-partner .parallax-container .carousel-partner .carousel').carousel('next');
  }, 2000);

        /* For Mobile */
         $('.info-partner1 .parallax-container .carousel-partner1 .carousel').carousel();

        setInterval(function() {
            $('.info-partner1 .parallax-container .carousel-partner1 .carousel').carousel('next');
        }, 2000);

    /*Slider*/
    $('.slider').slider({height: 600});

    /*Parallax*/
    $('.parallax').parallax();
      $('ul.tabs').tabs({
      swipeable : true,
      responsiveThreshold : 1920
    });

    /*T-Scroll*/
     Tu.tScroll({
      't-element': '.zoomIn'
    })

     /* Button Appearance*/
     window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById("button-pos").style.display = "block";
            } else {
                document.getElementById("button-pos").style.display = "none";
            }
        }
    /* Collapsible */
    $(document).ready(function(){
        $('.collapsible').collapsible();
    });
});
