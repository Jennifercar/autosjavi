const menu = document.querySelector('#menu');
const navList = document.querySelector('#navList');

const menuLinks = navList.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.checked = false;
    navList.classList.remove('openMenu');
  });
});