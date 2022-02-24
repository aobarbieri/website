$(document).ready(() => {
	// MENU
	$('.navbar__menu-btn').on('click', function () {
		$('.navbar__links').toggleClass('active');
		$(this).find('i').toggleClass('fas fa-bars');
		$(this).find('i').toggleClass('far fa-window-close');
	});
});

// move slowly to the target
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
