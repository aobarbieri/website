/****** Mobile hamburger menu *******/
// selects button and icons
const menuBtn = document.querySelector('.menu-btn');
const iconMenu = document.querySelector('#iconMenu');
const activeList = document.querySelector('#activeList');
const toggleOff = document.querySelectorAll('.toggleOff');

// listen to a click on button
menuBtn.addEventListener('click', toggleMenu);
Array.from(toggleOff).forEach((element) => element.addEventListener('click', toggleMenu));

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

function toggleMenu() {
	iconMenuToggle();
	activeIcons();
}

/****** Move slowly to the target area ******/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (event) {
		event.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});
