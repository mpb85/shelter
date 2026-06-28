/*----------------------------- Humburger menu ------------------------------------*/
const hamburgerMenu = document.querySelector('.nav__hamburger');
const headerMenu = document.querySelector('.header__menu');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');

 hamburgerMenu.addEventListener('click', ()=>{
    openBurger();    
});

menuList.addEventListener('click', (e)=>{
    const burgerBtn = e.target.closest('.menu__item');
    if(!burgerBtn) return;
    closeBurger();
})

document.addEventListener('click', (e)=>{
    if(!hamburgerMenu.contains(e.target) && !headerMenu.contains(e.target)){
        closeBurger();
    }
})

function openBurger() {
    hamburgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('show');
    document.body.classList.toggle('_lock');
    document.getElementById('overlay').classList.toggle('active');
   // document.addEventListener('click', closeBurgerOnClickOutside);
}
function closeBurger() {
    hamburgerMenu.classList.remove('active');
    headerMenu.classList.remove('show');
    document.body.classList.remove('_lock');
    document.getElementById('overlay').classList.remove('active');
   // document.removeEventListener('click', closeBurgerOnClickOutside)
}

/* function closeBurgerOnClickOutside(e) {
    if (!hamburgerMenu.contains(e.target) && !headerMenu.contains(e.target)) {
        closeBurger();
    }
} */



/*--------------------------------------- POPUP -------------------------------------*/

/*--------------------------------------- carusel -----------------------------------*/
const PETS = JSON.stringify()