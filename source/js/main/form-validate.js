'use strict';
(function () {
  var form = document.querySelector('.form__inner');
  var mailInput = form.querySelector('#user-mail');
  var passwordInput = form.querySelector('#user-password');

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

  // function validateMailInputHandler() {
  //   mailInput.classList.remove('form__input--invalid');
  //   error_message('message-mail', '');

  //   if (mailInput.value !== '') {
  //     if (!mailInput.value.includes('@') || !mailInput.value.includes('.')) {
  //       mailInput.classList.add('form__input--invalid');
  //       error_message('message-mail', 'Please enter the valid e-mail');
  //     } else {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // function validatePasswordInputHandler() {
  //   passwordInput.classList.remove('form__input--invalid');
  //   error_message('message-password', '');

  //   if (passwordInput.value !== '') {
  //     if (passwordInput.value.length < 6) {
  //       passwordInput.classList.add('form__input--invalid');
  //       error_message('message-password', 'Please enter the valid password');
  //     } else {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  function validateAllInputsHandler(input, idMessage, requirement) {
    input.classList.remove('form__input--invalid');
    error_message(idMessage, '');
    if (input.value !== '') {
      if (requirement) {
        input.classList.add('form__input--invalid');
        error_message(idMessage, 'Please enter the valid value');
      } else {
        return true;
      }
    }
    return false;
  }

  function submitFormHandler(evt) {
    // if (!validateMailInputHandler() || !validatePasswordInputHandler()) {
    if (!validateAllInputsHandler(mailInput, 'message-mail', !mailInput.value.includes('@') || !mailInput.value.includes('.')) ||
        !validateAllInputsHandler(passwordInput, 'message-password', passwordInput.value.length < 6)) {
      evt.preventDefault();
      if (!mailInput.value) {
        mailInput.classList.add('form__input--invalid');
        error_message('message-mail', 'This field cannot be empty');
      }
      if (!passwordInput.value) {
        passwordInput.classList.add('form__input--invalid');
        error_message('message-password', 'This field cannot be empty');
      }
    } else {
      if (isStorageSupport) {
        console.log('2-1');
        localStorage.setItem('userMail', mailInput.value);
        mailInput.classList.remove('form__input--invalid');
        passwordInput.classList.remove('form__input--invalid');
        error_message('message-mail', '');
        error_message('message-password', '');
        console.log('2-2');
      }
    }

  };

  // mailInput.addEventListener('input', validateMailInputHandler);
  // passwordInput.addEventListener('input', validatePasswordInputHandler);

  mailInput.addEventListener('input', function() {
    validateAllInputsHandler(mailInput, 'message-mail', !mailInput.value.includes('@') || !mailInput.value.includes('.'));
  });
  passwordInput.addEventListener('input', function() {
    validateAllInputsHandler(passwordInput, 'message-password', passwordInput.value.length < 6);
  });

  form.addEventListener('submit', submitFormHandler);

})();
