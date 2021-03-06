(function () {
  // ----------------- countdown -----------------
  let timeinterval;
  const startBtn = document.querySelector('#start');
  const resetBtn = document.querySelector('#reset');
  const message = document.querySelector('#deadline-message');
  const inputs = document.querySelectorAll('.countdown__input');
  const form = document.querySelector('#countdown-form');

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  function initializeClock(endtime) {
    const clock = document.querySelector('.countdown__box');
    const daysInput = clock.querySelector('.days');
    const hoursInput = clock.querySelector('.hours');
    const minutesInput = clock.querySelector('.minutes');
    const secondsInput = clock.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);

      if (t.total <= 0) {
        form.classList.add('hidden');
        message.classList.remove('hidden');
        message.classList.add('visible');
        clearInterval(timeinterval);
        return true;
      }

      daysInput.value = '0' + t.days;
      hoursInput.value = ('0' + t.hours).slice(-2);
      minutesInput.value = ('0' + t.minutes).slice(-2);
      secondsInput.value = ('0' + t.seconds).slice(-2);
    }

    updateClock();
    timeinterval = setInterval(updateClock, 1000);
  };

  function validateForm () {
    let valid = true;
    const clock = document.querySelector('.countdown__box');
    const daysInput = clock.querySelector('.days');
    const hoursInput = clock.querySelector('.hours');
    const minutesInput = clock.querySelector('.minutes');
    const secondsInput = clock.querySelector('.seconds');

    if (daysInput.value === '' && hoursInput.value === '' && minutesInput.value === '' && secondsInput.value === '') {
      alert ( "Fill in at least one field of the Сountdown, please." );
      valid = false;
    }

    return valid;
  };

  function startCountdownHandler () {
    const clock = document.querySelector('.countdown__box');
    let daysInputValue = clock.querySelector('.days').value * 1000 * 60 * 60 * 24;
    let hoursInputValue = clock.querySelector('.hours').value * 1000 * 60 * 60;
    let minutesInputValue = clock.querySelector('.minutes').value * 1000 * 60;
    let secondsInputValue = clock.querySelector('.seconds').value * 1000;

    const deadline = new Date(Date.parse(new Date()) + daysInputValue + hoursInputValue + minutesInputValue + secondsInputValue);

    if (validateForm()) {
      initializeClock(deadline);
      startBtn.disabled = true;
      resetBtn.disabled = false;
      startBtn.blur();
    }
  };

  function getDefaultCountdown () {
    inputs.forEach(function(el) {
      el.value = '';
    });
    startBtn.disabled = false;
    resetBtn.disabled = true;
  };

  function resetCountdownHandler () {
    clearInterval(timeinterval);
    getDefaultCountdown();
  };

  function closeMessageOverlayHandler(evt) {
    if (message.classList.contains('visible')) {
      evt.preventDefault();
      message.classList.remove('visible');
      message.classList.add('hidden');
      form.classList.remove('hidden');
      getDefaultCountdown();
    }
  };

  window.countdown = {
    getDefaultCountdown: getDefaultCountdown
  };

  startBtn.addEventListener('click', startCountdownHandler);
  resetBtn.addEventListener('click', resetCountdownHandler);
  document.addEventListener('click', closeMessageOverlayHandler);

})();
