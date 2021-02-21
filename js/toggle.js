const mobileMenu = document.querySelector('.mobile_menu');0
mobileMenu.addEventListener('click', mobileMenuEventListener);

function mobileMenuEventListener(event) {
    const menuStyle = document.getElementById('layout');
    const burgerButton = document.getElementById('header-button');
    const burgerMenu = document.getElementById('header-menu');

    if (event.target == burgerButton) {
        burgerButton.classList.add('menu-active');
        menuStyle.classList.add('menu-style');

    } else if (event.target !== burgerMenu && !event.target.matches('li, a, svg')) {
        burgerButton.classList.remove('menu-active');
        menuStyle.classList.remove('menu-style');
    }
}
