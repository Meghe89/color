/* DOM LINKS */

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const elem = document.querySelector('.highlight');
const homeMenu = document.querySelector('#home-page');
const aboutMenu = document.querySelector('#about-page');
const servicesMenu = document.querySelector('#services-page');  



const aLinks = document.querySelectorAll('.navbar__item');
const hero = document.querySelector('.hero');
const year = document.querySelector('#year')


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
navLogo.addEventListener('click', mobileMenu);

aLinks.forEach(el =>{
    el.addEventListener('click', pressLink);
})

document.addEventListener('scroll' , function(){
    if (window.innerWidth > 960 && scrollY < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return       
    } else if(window.innerWidth > 960 && scrollY < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')  
        servicesMenu.classList.remove('highlight')
        return      
    } else if(window.innerWidth > 960 && scrollY < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')        
        return      
    }

    if (elem && window.innerWidth < 960 && scrollY < 600 || elem) {
        elem.classList.remove('highlight')
    }
})

//show active menu when scrolling



//year
let date = new Date;
let fullYear = date.getFullYear();

year.innerHTML = `${fullYear}.`

