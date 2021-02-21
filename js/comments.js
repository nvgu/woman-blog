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

/**
 * Создаем html элемент комментария
 * 
 * @param {string} name - автор
 * @param {string} text - комментарий
 */
function createCommentHTMLElement(name, text) {
    const commentList = document.querySelector('.comments_item');

    const newComment = document.createElement('li');
    const newName = document.createElement('p');
    const newText = document.createElement('p');
  
    newComment.classList.add('comment');
    newName.classList.add('comment-name');
    newText.classList.add('comment-text');

    commentList.append(newComment);
    newComment.append(newName);
    newComment.append(newText);

    newName.innerHTML = name;
    newText.innerHTML = text;
    
}

(function(){

    const comments = loadComments();
    comments.forEach(comment => {
        createCommentHTMLElement(comment.name, comment.text)
    });
})();