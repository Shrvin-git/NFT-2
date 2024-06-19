const navToggleIcon = document.querySelector('.nav__btn-toggle')
const menu = document.querySelector('.menu')

navToggleIcon.addEventListener('click',function (){
    this.classList.toggle('nav__toggle-icon--open');
    menu.classList.toggle('menu--open');

})