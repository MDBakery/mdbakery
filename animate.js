// Animation Function
function animateOne(element, animationClass) {
  
    window.addEventListener("scroll", function () {
      var windowHeight = window.innerHeight;
  
      for (var i = 0; i < element.length; i++) {
      var elementPosition = element[i].getBoundingClientRect().top + window.pageYOffset;

        if (window.pageYOffset > elementPosition - windowHeight + 50) {
          element[i].classList.add(animationClass);
        }
      }
    });
  }