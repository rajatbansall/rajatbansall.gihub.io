/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('.slider').slider({height: 600});
    $('.scrollspy').scrollSpy();
     $('.parallax').parallax();
      $('ul.tabs').tabs({
      swipeable : true,
      responsiveThreshold : 1920
    });
     Tu.tScroll({
      't-element': '.zoomIn'
    })
});
        
        