// Navbar jQuery
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

// Carousel jQuery
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

// Modal JQuery
$(document).ready(function(){
    $('.modal').modal();
  });

// Scroll Reveal JS Plugin
ScrollReveal().reveal('.grid-item', {
    interval: 250,
    reset: true
  });