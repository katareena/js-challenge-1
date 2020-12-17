'use strict';
(function () {
  var cover = document.querySelector('.cover');

  function closeOverlayHandler(evt) {
    window.matchesForIE.changeMatchesForIE();
    if (cover.classList.contains('cover--show')) {
      evt.preventDefault();
      cover.classList.remove('cover--show');
    }
  };

  function resetAllInpuns() {
    var inputs = document.querySelectorAll('input')
    inputs.forEach(function (el) {
      el.value = '';
    });
  };

//----------------- поворот картинки ---------

  // var setDebounce = function () {
  //   var lastTimeout;
  //   if (lastTimeout) {
  //     window.clearTimeout(lastTimeout);
  //   }
  //   lastTimeout = window.setTimeout(function() {
  //     if (cover.classList.contains('cover--rotate')) {
  //       cover.classList.remove('cover--rotate');
  //     }
  //   }, 1000);
  // };

  var mouseMoveHandler = function (moveEvt) {
    moveEvt.preventDefault();

    if (cover.classList.contains('cover--show')) {
      cover.style.transform = 'rotate(180deg)';
      // cover.classList.add('cover--rotate');
    }

    // setDebounce();

  };
// ----------------------- конец -------------------

  document.addEventListener('DOMContentLoaded', function () {
    cover.classList.add('cover--show');
    window.countdown.getDefaultCountdown();
    resetAllInpuns();
    document.addEventListener('mousemove', mouseMoveHandler);
  });

  document.addEventListener('click', closeOverlayHandler);

})();
