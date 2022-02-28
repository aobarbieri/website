/* Mobile hamburger menu */
// selects button and icons
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
	activeList.classList.toggle('menuHidden');
	activeList.classList.toggle('mobile');
}

/* Move slowly to the target area */
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
