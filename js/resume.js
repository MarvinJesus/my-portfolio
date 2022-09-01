(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function showTitle(e) {

    var data = e.getAttribute("data-image-id");
    switch(data) 
    {
      case '1':
        document.getElementById("image-modal").setAttribute("src","./img/002.jpg");
        break;
      case '2':
        document.getElementById("image-modal").setAttribute("src","./img/001.jpg");
        break;
      case '3':
        document.getElementById("image-modal").setAttribute("src","./img/scrumMaster.png");
        break;
      case '4':
        document.getElementById("image-modal").setAttribute("src","./img/scrumMasterProfesional.png");
        break;
      case '5':
        document.getElementById("image-modal").setAttribute("src","./img/scrumMasterFoundation.png");
        break;
      case '6':
        document.getElementById("image-modal").setAttribute("src","./img/CCNA.png");
        break;
      default:
        // code block
    }
};