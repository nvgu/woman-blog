(function () {
    let toogle = document.querySelector('.header_nav__toggle');
    toogle.addEventListener('click', () => {
        toogle.classList.toggle('opened');
    });
})();