(function () {
  // ----------------- counter -----------------
  const buttons = document.querySelectorAll('.counter__btn');
  const buttonMinus = document.querySelector('.counter__btn--minus');
  const resultBox = document.querySelector('.counter__result');

  function changeNumber(evt) {
    const btnTarget = evt.currentTarget;
    const result = resultBox.textContent;

    if (btnTarget.classList.contains('counter__btn--plus')) {
      resultBox.textContent = parseInt(result) + 1;
      buttonMinus.disabled = false;
    }

    if (btnTarget.classList.contains('counter__btn--minus')) {
      if (resultBox.textContent < 2) {
        resultBox.textContent = parseInt(0);
        buttonMinus.disabled = true;
      }

      resultBox.textContent = parseInt(result) - 1;


      // else {
      //   resultBox.textContent = parseInt(result) - 1;
      //   // buttonMinus.disabled = false;
      // }
    }
  };

  buttons.forEach(function (el) {
    el.addEventListener('click', changeNumber);
  });

})();
