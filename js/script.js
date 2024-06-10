const navbarSlide = () => {
	const burger = document.querySelector('.burger');
	const nav =document.querySelector('.navbar--links')
	const navLinks = document.querySelectorAll('.navbar--links li');
	

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


window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 930)
})

const checkbox = document.getElementById("colortheme-checkbox");
const bodyclass = document.querySelector('.body');
checkbox.addEventListener("change", () => {
	bodyclass.classList.toggle('dark');
});
/*
function darkmode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
*/