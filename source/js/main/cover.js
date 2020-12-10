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

  document.addEventListener("DOMContentLoaded", function () {
    cover.classList.add('cover--show');
    window.countdown.getDefaultCountdown();
  });

  document.addEventListener('click', closeOverlayHandler);

})();
