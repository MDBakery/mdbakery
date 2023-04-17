//  Nav toggler change
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
      $('#nav-icon').toggleClass('bi-list bi-x');
    });
  });
  
  
  // height of body section
  $('body').css('padding-top', $('.navbar').outerHeight());
  var bodyHeight = $('body').height() - $('.navbar').outerHeight();
  $('fixed-height').css('height', bodyHeight)
  
  
  
  // JavaScript code to toggle navbar visibility on scroll
  $(document).ready(function() {
    var navbar = $('.navbar'); // Navbar element
    var navbarHeight = navbar.outerHeight(); // Navbar height
    var scrollThreshold = 200; // Scroll threshold in pixels
  
    // Check scroll position on page load
    checkNavbarVisibility();
  
    // Check scroll position on window scroll
    $(window).on('scroll', function() {
      checkNavbarVisibility();
    });
  
    // Function to check scroll position and toggle navbar visibility
    function checkNavbarVisibility() {
      var scrollPosition = $(window).scrollTop();
      if (scrollPosition >= scrollThreshold) {
        navbar.addClass('hidden');
      } else {
        navbar.removeClass('hidden');
      }
    }
  });
  
  