/* DOM LINKS */

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const aLinks = document.querySelectorAll('.navbar__item');
const hero = document.querySelector('.hero');

//DISPLAY MOBILE MENU
//FUNCTION

function mobileMenu() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
}

function pressLink(){
    menuLinks.classList.remove('active')
    menu.classList.remove('is-active');
}

/* EVENT LISTENER */
menu.addEventListener('click', mobileMenu);

aLinks.forEach(el =>{
    el.addEventListener('click', pressLink);
})
