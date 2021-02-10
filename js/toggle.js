(function () {
    const menuStyle = document.getElementById('layout')
    const burgerButton = document.getElementById('header-button');
    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('menu-active');
        menuStyle.classList.toggle('menu-style');
    });
    document.addEventListener('click', outSideEventListener);
    function outSideEventListener(event) {
        if(event.target.id != 'header-button' && event.target.id != 'header-menu' && event.target.tagName != 'LI' && event.target.tagName != 'A') {
            burgerButton.classList.remove('menu-active');
            menuStyle.classList.remove('menu-style'); 
        };
    };
})();