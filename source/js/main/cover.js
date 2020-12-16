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
    // console.log(inputs);
    inputs.forEach(function (el) {
      el.value = '';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    cover.classList.add('cover--show');
    window.countdown.getDefaultCountdown();
    resetAllInpuns();
  });

  document.addEventListener('click', closeOverlayHandler);

})();
