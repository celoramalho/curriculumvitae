/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
    /*!
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
})(jQuery);
*/
 // End of use strict
// End 

const navbarSlide = () => {
	const burger = document.querySelector('.burger');
	const nav =document.querySelector('.navbar-links')
	const navLinks = document.querySelectorAll('.navbar-links li');
	

	burger.addEventListener('click', () => {
	//Toggle Nav
		nav.classList.toggle('navbar-ativo');
//Animate Links
			navLinks.forEach((link, index) => {
		if (link.style.animation){
			link.style.animation = '';
		} else {
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
		}
	});
		//Burger Animation
		burger.classList.toggle('toggle')
	});
	

}


navbarSlide();

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 930)
})
