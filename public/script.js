
$(document).ready(() => {

// MENU
    $('.navbar__menu-btn').on('click', function () {
        $('.navbar__links').toggleClass('active');
        $(this).find('i').toggleClass('fas fa-bars');
        $(this).find('i').toggleClass('far fa-window-close');
    });

});
