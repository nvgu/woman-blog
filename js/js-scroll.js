(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        };
    };
}());

const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) { 
    
    smoothLink.addEventListener('click', smoothScroll);
    
    function smoothScroll (event) { 
        event.preventDefault()
        
        const blockID = event.target.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(blockID);
        const topOffset = document.querySelector('.header_wrapper__nav').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
      
        window.scrollBy ({
            top: offsetPosition,
            behavior: "smooth",
        });
    };      
}
