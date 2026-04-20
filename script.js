const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const Overlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
    Overlay.classList.remove('hidden');
});

const hideMenu = () => {
    mobileMenu.classList.add('-translate-x-full');
    Overlay.classList.add('hidden');
};

closeMenu.addEventListener('click', hideMenu);
Overlay.addEventListener('click', hideMenu);