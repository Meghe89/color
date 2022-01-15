const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

//DISPLAY MOBILE MENU
function mobileMenu() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);