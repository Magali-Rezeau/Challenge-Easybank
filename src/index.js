import "./styles/styles.scss";

const iconMenu = document.querySelector('.header-nav-icon');
const iconMenuClose = document.querySelector('.header-nav-icon-close');
const header = document.querySelector('.header');
const nav = document.querySelector('.header-nav');
let mobileMenuDom;
let isMenuOpen = false;

const createMenu = () => {
    mobileMenuDom = document.createElement('nav');
    mobileMenuDom.classList.add('header-nav-mobile');
    mobileMenuDom.addEventListener("click", event => {
        event.stopPropagation();
    });
    mobileMenuDom.append(nav.querySelector('ul').cloneNode(true));
    header.append(mobileMenuDom);
};

const openMenu = () => {
    iconMenu.style.display = "none";
    iconMenuClose.style.display = "block";
    if (!mobileMenuDom) {
        createMenu();
    }
    mobileMenuDom.classList.add('open');
};

const closeMenu = () => {
    iconMenu.style.display = "block";
    iconMenuClose.style.display = "none";
    mobileMenuDom.classList.remove('open');
};

const toogleMobileMenu = () => {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
    isMenuOpen = !isMenuOpen;
};

iconMenu.addEventListener("click", event => {
    event.stopPropagation();
    toogleMobileMenu();
});

window.addEventListener('click', () => {
    if (isMenuOpen) {
        toogleMobileMenu();
    }
});