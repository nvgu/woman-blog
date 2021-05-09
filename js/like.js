(function () {
    const like = document.getElementById('article-counter');
    const counterLike = document.getElementById('counter-num');
    like.addEventListener('click', () => {  
        if(like.classList.contains('added')) {  
            counterLike.textContent--;
        } else{
            counterLike.textContent++;
        }
        like.classList.toggle('added');
    });
})();





