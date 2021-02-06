(function () {
    const burgerButton = document.querySelector('.header_nav__toggle');
    const menu = document.querySelector('.header_toggle__menu');
    const overlay = document.querySelector('.mobile_overlay');
    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('opened');
        menu.classList.toggle('menu_active');
        overlay.classList.toggle('overlay_active');
    });
})();