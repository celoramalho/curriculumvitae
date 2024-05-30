
const navbarSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navbar-links')
	const navLinks = document.querySelectorAll('.navbar-links li');
	const navLinksA = document.querySelectorAll('.barra-item');
	


	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('navbar-ativo');
		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle')
	});


	for (let i = 0; i < navLinksA.length; i++) {
		navLinksA[i].addEventListener("click", function() {
			//console.log(i)
			nav.classList.toggle('navbar-ativo');
		//Animate Links
		navLinks.forEach((link) => {
			link.style.animation = '';
		});
		});
	}


}
navbarSlide();

navbarSlide();

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 930)
})