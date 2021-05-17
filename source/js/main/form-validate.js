(function () {
  // ----------------- form validate -----------------
  const form = document.querySelector('.form__inner');
  const mailInput = form.querySelector('#user-mail');
  const passwordInput = form.querySelector('#user-password');

  let isStorageSupport = true;
  let storage = '';

  try {
    storage = localStorage.getItem('nameUser');
  } catch (err) {
    isStorageSupport = false;
  };

  function error_message(id, message) {
    document.getElementById(id).innerText = message;
  };

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
  };

  function submitFormHandler(evt) {
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
        localStorage.setItem('userMail', mailInput.value);
        mailInput.classList.remove('form__input--invalid');
        passwordInput.classList.remove('form__input--invalid');
        error_message('message-mail', '');
        error_message('message-password', '');
      }
    }
  };

  mailInput.addEventListener('input', function() {
    validateAllInputsHandler(mailInput, 'message-mail', !mailInput.value.includes('@') || !mailInput.value.includes('.'));
  });
  passwordInput.addEventListener('input', function() {
    validateAllInputsHandler(passwordInput, 'message-password', passwordInput.value.length < 6);
  });

  form.addEventListener('submit', submitFormHandler);
})();
