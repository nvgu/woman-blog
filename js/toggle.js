(function () {
    let toogle = document.querySelector('.header_nav__toggle');
    let menuOpen = document.querySelector('.header_toggle__menu');
    let overlay = document.querySelector('.mobile_overlay');
    toogle.addEventListener('click', () => {
        toogle.classList.toggle('opened');
        menuOpen.classList.toggle('menu_active');
        overlay.classList.toggle('overlay_active');
    });
})();