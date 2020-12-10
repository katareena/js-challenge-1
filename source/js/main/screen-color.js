'use strict';
(function () {
  var buttons = document.querySelectorAll('.colors__btn');
  var body = document.body;

  function changeColor(trgt) {
    var elemEvt = trgt;
    var color = elemEvt.dataset.color;
    body.setAttribute('class', '');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('colors__btn--active')
    }

    if (elemEvt.classList.contains('colors__btn--' + color)) {
      body.classList.add('body--' + color);
      elemEvt.classList.add('colors__btn--active');
    }
  };

  function clickPressHandler(elem) {
    changeColor(elem.currentTarget);
  };

  function enterPressHandler(evt) {
    if (evt.key === 'Enter') {
      changeColor(evt.target);
    }
  };

  buttons.forEach(function (el) {
    el.addEventListener('click', clickPressHandler);
    el.addEventListener('keydown', enterPressHandler);
  });

})();
