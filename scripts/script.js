let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');
const emailElement = document.getElementById('email');

// Initial visibility state (visible)
let isEmailVisible = true;

Fabars.onclick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document

    Navbar.classList.toggle("active");
    $(".home .content").addClass("hide-content");
};

// Close the navigation when clicking anywhere on the document
document.onclick = () => {
    Navbar.classList.remove("active");
    $(".home .content").removeClass("hide-content");
};

/*
$(document).ready(function() {
    const contentDiv = $('.content');
    const scrollThreshold = 5;

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > scrollThreshold) {
            contentDiv.addClass('hide-content');
        } else {
            contentDiv.removeClass('hide-content');
        }
    });
});

$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768, 2],
      itemsMobile:[650, 1],
      pagination: true,
      autoPlay: true
    });
});
*/
