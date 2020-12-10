'use strict';
(function () {
  var buttons = document.querySelectorAll('.counter__btn');
  var resultBox = document.querySelector('.counter__result');

  function changeNumber(evt) {
    var btnTarget = evt.currentTarget;
    var result = resultBox.textContent;

    if (btnTarget.classList.contains('counter__btn--plus')) {
      resultBox.textContent = parseInt(result) + 1;
    }

    if (btnTarget.classList.contains('counter__btn--minus')) {
      resultBox.textContent = parseInt(result) - 1;
    }
  };

  buttons.forEach(function (el) {
    el.addEventListener('click', changeNumber);
  });

})();
