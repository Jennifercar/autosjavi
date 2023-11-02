
const menu = document.querySelector('#menu');
const closeMenu = document.getElementById('closeMenu');

//EVENTS
menu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

//MENU TOGGLE
function toggleMenu() {
    menu.classList.toggle('openMenu');
}