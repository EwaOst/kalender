$(document.body).on('click', 'a[href*="#"]', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 900);
  });
  
  $(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    var height = $(window).height();
    if (scrolled < height) {
      $('.full-image').css({
        'top': -scrolled * .5
      });
    }
  });

  
// script.js
function showInfo(ziolo) {
  // Animacja fadeOut na obecnej stronie
  $('body').fadeOut(500, function() {
      // Po zakończeniu animacji wykonaj przekierowanie na stronę o ziole
      window.location.href = `/ziolo/${ziolo}-strona`;  // Zmieniamy URL według potrzeby
  });
}
  
  