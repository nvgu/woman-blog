const containers = document.querySelectorAll('.info_menu__card');
const filter = document.querySelector('.info_menu__container_button');

filter.onchange = function () {

    containers.forEach((container) => {

        if(container.dataset.category !== filter.value && filter.value !== 'all'){
            container.classList.add('hidden');
            
        } else {
            container.classList.remove('hidden');
        }
    });
}