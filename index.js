const hamburgerMenu = document.querySelector('.header__menu');
const navItemList = document.querySelector('.header__nav-list');
const navListItems = document.querySelectorAll('.header__nav-item a');

const toggleMenu = () => {
    navItemList.classList.toggle('collapse');
    hamburgerMenu.classList.toggle('header__menu--close');
    hamburgerMenu.classList.contains('header__menu--close') ? hamburgerMenu.textContent = 'close' : hamburgerMenu.textContent = 'menu';
};

hamburgerMenu.addEventListener('click', toggleMenu);
for(let item of navListItems) {
    item.addEventListener('click', toggleMenu);
};