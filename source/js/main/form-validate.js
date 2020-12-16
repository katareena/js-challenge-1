'use strict';
(function () {
  var form = document.querySelector('.form__inner');
  var mailInput = form.querySelector('#user-mail');
  var passwordInput = form.querySelector('#user-password');
  var inputs = form.querySelectorAll('input');
  var submitBtn = form.querySelector('.form__submit');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('nameUser');
  } catch (err) {
    isStorageSupport = false;
  };

  function error_message(id, message) {
    document.getElementById(id).innerText = message;
  };

  function validateAllInputsHandler() {
    if (mailInput.value === '') {
      mailInput.classList.add('form__input--invalid');
      error_message('message-mail', 'This field cannot be empty');
    } else if (!mailInput.value.includes('@') || !mailInput.value.includes('.')) {
      mailInput.classList.add('form__input--invalid');
      error_message('message-mail', 'Please enter the valid username');
    } else {
      mailInput.classList.remove('form__input--invalid');
      error_message('message-mail', '');
    }

    if (passwordInput.value === '') {
      passwordInput.classList.add('form__input--invalid');
      error_message('message-password', 'This field cannot be empty');
    } else if (passwordInput.value.length < 6) {
      passwordInput.classList.add('form__input--invalid');
      error_message('message-password', 'Please enter the valid password');
    } else {
      passwordInput.classList.remove('form__input--invalid');
      error_message('message-password', '');
    }

    if (mailInput.value == '' || passwordInput.value == '' ||
    !mailInput.value.includes('@') || !mailInput.value.includes('.') || passwordInput.value.length < 6) {
      return false;
    } else {
      // alert('Form submitted successfully.')
      return true;
    }
  };

  function submitFormHandler() {
    if (validateAllInputsHandler()) {
      if (isStorageSupport) {
        localStorage.setItem('userMail', mailInput.value);
      }
    }
  };

  inputs.forEach(function (input) {
    input.addEventListener('change', validateAllInputsHandler);
  });

  submitBtn.addEventListener('click', submitFormHandler);

  // localStorage.getItem('userMail');
  // element.addEventListener разница между 'click' 'submit' и переход формы на эхо

})();
