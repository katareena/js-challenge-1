'use strict';
(function () {
  var CURSOR_WIDTH = 200;
  var cover = document.querySelector('.cover__bg');
  var cursor = document.querySelector('.cover__cursor');
  var mainWrap = document.querySelector('.main__wrap');

  function closeOverlayHandler(evt) {
    if (cover.classList.contains('show')) {
      evt.preventDefault();
      cover.classList.remove('show');
      cursor.classList.remove('show');
      mainWrap.classList.remove('visually-hidden');
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('click', closeOverlayHandler);
    }
  };

  var limits = {
    right: window.innerWidth - CURSOR_WIDTH,
    bottom: window.innerHeight - CURSOR_WIDTH
  };

  function mouseMoveHandler(evt) {
    if (cover.classList.contains('show')) {
      var x = evt.pageX;
      var y = evt.clientY;

      if (x < limits.right) {
        cursor.style.left = x + 'px';
      } else {
        cursor.style.left = limits.right + 'px';
      }

      if (y < limits.bottom) {
        cursor.style.top = y + 'px';
      } else {
        cursor.style.top = limits.bottom + 'px';
      }
    }
  };

  function resetAllInpuns() {
    var inputs = document.querySelectorAll('input')
    inputs.forEach(function (el) {
      el.value = '';
    });
  };

  function setPageHandler() {
    mainWrap.classList.add('visually-hidden');
    cover.classList.add('show');
    cursor.classList.add('show');
    window.countdown.getDefaultCountdown();
    resetAllInpuns();
    document.addEventListener('mousemove', mouseMoveHandler);
  }

  document.addEventListener('DOMContentLoaded', setPageHandler);
  document.addEventListener('click', closeOverlayHandler);

})();
