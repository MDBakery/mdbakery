//  Nav toggler change
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
      $('#nav-icon').toggleClass('bi-list bi-x');
    });
  });

  
// Scroll-to-top button
var scrollToTopBtn = document.getElementById("scroll-to-top-btn");
// Add a scroll event listener to the window object
window.addEventListener("scroll", function() {
  // If the vertical scroll position is greater than or equal to 100px,
  // show the scroll-to-top button; otherwise, hide it
  if (window.pageYOffset >= 300) {
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
  
  