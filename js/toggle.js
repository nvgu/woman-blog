(function () {
const scrollFrozen = document.getElementById('layout');
const burgerButton = scrollFrozen.querySelector('.header_nav__toggle');
const mobileMenu = scrollFrozen.querySelector('.mobile_menu');
const burgerMenu = mobileMenu.querySelector('.header_toggle__menu');
const overlay = mobileMenu.querySelector('.mobile_overlay');

    burgerButton.addEventListener('click', () => { 
            burgerButton.classList.toggle('button-active');
            burgerMenu.classList.toggle('menu-active');
            overlay.classList.toggle('overlay');
            scrollFrozen.classList.toggle('scroll-frozen');
   });

    mobileMenu.addEventListener( 'click', outSideCloseMenu);
    function outSideCloseMenu(event) {
        if ( !burgerMenu.contains(event.target) )  { 
            burgerButton.classList.remove('button-active');
            burgerMenu.classList.remove('menu-active');
            overlay.classList.remove('overlay');
            scrollFrozen.classList.remove('scroll-frozen');           
        } 
    };  
})();