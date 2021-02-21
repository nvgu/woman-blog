let commentField = document.querySelector('.message_form_field');
let submitButton = document.querySelector('.info_button__submit');
commentField.oninput = function () {
  if (commentField.value.length < 10 || commentField.value.length > 200) {
    commentField.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentField.classList.remove('warning');
    submitButton.disabled = false;
  } 
};