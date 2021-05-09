document.querySelector('.comments_form__button').onclick = function (event) {
    event.preventDefault();
  
    const nameFieldValue = document.querySelector('.name_form_field').value
    const textFieldValue = document.querySelector('.message_form_field').value;

    saveComments({
        name: nameFieldValue,
        text: textFieldValue,
    });
    createCommentHTMLElement(nameFieldValue, textFieldValue);

}

/**
 * Сохраняет комментарий в localStorage
 * @param {object} comment объект комментария
 */
function saveComments(comment){
    const comments = loadComments();
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

/**
 * Загружает коментарии из localStorage
 * @return {array} комментарии
 */
function loadComments(){
    let comments = [];

    if (localStorage.getItem('comments')) {
        comments = JSON.parse(localStorage.getItem('comments'))
    };

    return comments;

}
function deleteCommentLokalStorage (index) {
    comments = JSON.parse(localStorage.getItem('comments'))
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
};
/**
 * Создаем html элемент комментария
 * 
 * @param {string} name - автор
 * @param {string} text - комментарий
 * @param {string} button - кнопка для удаления комментария
 */
function createCommentHTMLElement(name, text, index) {
    const commentList = document.querySelector('.comments_item');

    const newComment = document.createElement('li');
    const newName = document.createElement('h3');
    const newText = document.createElement('p');
    const deleteButton = document.createElement('button');
  
    newComment.classList.add('comment');
    newName.classList.add('comment-name');
    newText.classList.add('comment-text');
    deleteButton.classList.add('comment-button');

    commentList.append(newComment);
    newComment.append(newName);
    newComment.append(newText);
    newComment.append(deleteButton);

    newName.innerHTML = name;
    newText.innerHTML = text;
    deleteButton.innerHTML = 'Удалить'; 
    deleteButton.setAttribute('data', index);

    deleteButton.addEventListener('click', deleteComment);
}

function deleteComment (event) {
    event.target.parentElement.remove();
    const index = event.target.getAttribute('data');
    deleteCommentLokalStorage(index);    
};
// действие в момент загрузки страницы
(function(){
    const comments = loadComments();
    comments.forEach((comment, index) => {
        createCommentHTMLElement(comment.name, comment.text, index);
    });
    const deleteButtons = document.querySelectorAll('.comment-button');
    deleteButtons.forEach((deleteButton) => { 
        deleteButton.addEventListener('click', deleteComment);
    });
})();

