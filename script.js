// $(document).ready(() => {
// 	// MENU
// 	$('.navbar__menu-btn').on('click', function () {
// 		$('.navbar__links').toggleClass('active');
// 		$(this).find('i').toggleClass('fa-solid fa-bars');
// 		$(this).find('i').toggleClass('fa-solid fa-xmark');
// 	});
// });

// Toggle hamburger menu
/* 
1) click on menu-btn, add the class with display visible to mobile icons 
2) hamburger menu changes to xmark
3) when click on xmark, add the class with display hidden to mobile icons
4) when click on any anchor tag under mobile, trigger the step 3
*/

// selects button and icon
const menuBtn = document.querySelector('.menu-btn');
const iconMenu = document.querySelector('#iconMenu');
const activeList = document.querySelector('#activeList');

// listen to a click on button
menuBtn.addEventListener('click', iconMenuToggle);
menuBtn.addEventListener('click', activeIcons);

// toggle the burger and xmark icons
function iconMenuToggle() {
	iconMenu.classList.toggle('fa-bars');
	iconMenu.classList.toggle('fa-xmark');
}

// toggle the visibility of the icons
function activeIcons() {
	activeList.classList.toggle('hidden');
	activeList.classList.toggle('mobile');
}

// move slowly to the target area
const workLink = document.querySelector('.workLink');
const contactLink = document.querySelector('.contactLink');
const navWorkLink = document.querySelector('.navWorkLink');
const navContactLink = document.querySelector('.navContactLink');

workLink.addEventListener('click', smoothScroll);
contactLink.addEventListener('click', smoothScroll);
navWorkLink.addEventListener('click', smoothScroll);
navContactLink.addEventListener('click', smoothScroll);

function smoothScroll(event) {
	event.preventDefault();
	const href = this.getAttribute('href');
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: 'smooth',
	});
}
