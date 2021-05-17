(function () {
  // ----------------- cover -----------------
  const CURSOR_WIDTH = 200;
  const cover = document.querySelector('.cover__bg');
  const cursor = document.querySelector('.cover__cursor');
  const mainWrap = document.querySelector('.main__wrap');
  const peopleInput = document.querySelector('#tip-people');

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

  const limits = {
    right: window.innerWidth - CURSOR_WIDTH,
    bottom: window.innerHeight - CURSOR_WIDTH,
  };

  function mouseMoveHandler(evt) {
    if (cover.classList.contains('show')) {
      const x = evt.pageX;
      const y = evt.clientY;

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
    const inputs = document.querySelectorAll('input');
    inputs.forEach(function (el) {
      el.value = '';
    });
    peopleInput.value = 1;
    const form = document.querySelector('.form__inner');
    form.reset();
  };

  function setPageHandler() {
    mainWrap.classList.add('visually-hidden');
    cover.classList.add('show');
    cursor.classList.add('show');
    window.countdown.getDefaultCountdown();
    resetAllInpuns();
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('touchstart', touchStartHandler, false);
    document.addEventListener('touchmove', touchMoveHandler, false);
    document.addEventListener('touchend', touchEndHandler, false);
  };

  document.addEventListener('DOMContentLoaded', setPageHandler);
  document.addEventListener('click', closeOverlayHandler);

  // ----------------- cover touch event -----------------
  let x = 0;
  let y = 0;

  function touchStartHandler(evt) {
    if (cover.classList.contains('show')) {
      switch (evt.touches.length) {
        case 1:
          console.log('1 touch');
          x = evt.touches[0].clientX;
          y = evt.touches[0].clientY;
          evt.preventDefault();
          break;
        case 2:
          console.log('2 touches');
          evt.preventDefault();
          break;
        case 3:
          console.log('3 touches');
          evt.preventDefault();
          break;
        default:
          console.log('Not supported');
          evt.preventDefault();
          break;
      }
    }
  };

  function touchMoveHandler(evt) {
    if (cover.classList.contains('show')) {
      if (evt.touches.length === 1) {
        console.log(`MovingX... ${Math.abs(x - evt.touches[0].clientX)}px`);
        console.log(`MovingY... ${Math.abs(y - evt.touches[0].clientY)}px`);

        cursor.style.left = `${Math.abs(x - evt.touches[0].clientX)}px`;
        cursor.style.top = `${Math.abs(y - evt.touches[0].clientY)}px`;
      }
    }
  };

  function touchEndHandler(evt) {
    if (cover.classList.contains('show')) {
      console.log('end move');
      x = 0;
      y = 0;
      cover.classList.remove('show');
      cursor.classList.remove('show');
      mainWrap.classList.remove('visually-hidden');
      evt.preventDefault();
    }
  };
})();
