(function () {
  // ----------------- screen color -----------------
  const buttons = document.querySelectorAll('.colors__btn');
  const body = document.body;

  function changeColor(trgt) {
    const elemEvt = trgt;
    const color = elemEvt.dataset.color;
    body.setAttribute('class', '');

    for (let i = 0; i < buttons.length; i++) {
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
