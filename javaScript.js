  // height of body section
  $('body').css('padding-top', $('.navbar').outerHeight());
  var bodyHeight = $('body').height() - $('.navbar').outerHeight();
  $('fixed-height').css('height', bodyHeight)

  
//  Nav toggler change
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
      $('#nav-icon').toggleClass('bi-list bi-x');
    });
  });
  

// Hiding navbar
const navbar = document.querySelector('.navbar');

// Get the height at which the navbar should be hidden
const hideHeight = 200;

// Check if the user has scrolled past the hide height
if (window.pageYOffset > hideHeight) {
  // Set the navbar to hidden
  navbar.classList.add('hidden');
}

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Check if the user has scrolled past the hide height
  if (window.pageYOffset > hideHeight) {
    // Set the navbar to hidden
    navbar.classList.add('hidden');

    // Set a flag in localStorage to indicate that the navbar is hidden
    localStorage.setItem('navbarHidden', 'true');
  } else {
    // Set the navbar to visible
    navbar.classList.remove('hidden');

    // Remove the flag from localStorage
    localStorage.removeItem('navbarHidden');
  }
});

// Check if the navbar should be hidden on page load 
// (i.e. if the user has already scrolled past the hide height)
if (localStorage.getItem('navbarHidden') === 'true') {
  // Set the navbar to hidden
  navbar.classList.add('hidden');
}


// Scroll-to-top button

var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// Add a scroll event listener to the window object
window.addEventListener("scroll", function() {
  // If the vertical scroll position is greater than or equal to 100px,
  // show the scroll-to-top button; otherwise, hide it
  if (window.pageYOffset >= 100) {
    scrollToTopBtn.classList.remove("d-none");
  } else {
    scrollToTopBtn.classList.add("d-none");
  }
});

// Add a click event listener to the scroll-to-top button
scrollToTopBtn.addEventListener("click", function() {
  // Scroll to the top of the page using smooth scrolling behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
  
  