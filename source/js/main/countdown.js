'use strict';
(function () {
  var timeinterval
  var startBtn = document.querySelector('#start');
  var resetBtn = document.querySelector('#reset');
  var message = document.querySelector('#deadline-message');
  var inputs = document.querySelectorAll('.countdown__input');
  var form = document.querySelector('#countdown-form');

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  function initializeClock(endtime) {
    var clock = document.querySelector('.countdown__box');
    var daysInput = clock.querySelector('.days');
    var hoursInput = clock.querySelector('.hours');
    var minutesInput = clock.querySelector('.minutes');
    var secondsInput = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

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
    var valid = true;
    var clock = document.querySelector('.countdown__box');
    var daysInput = clock.querySelector('.days');
    var hoursInput = clock.querySelector('.hours');
    var minutesInput = clock.querySelector('.minutes');
    var secondsInput = clock.querySelector('.seconds');

    if (daysInput.value === '' && hoursInput.value === '' && minutesInput.value === '' && secondsInput.value === '') {
      alert ( "Fill in at least one field of the Сountdown, please." );
      valid = false;
    }

    return valid;
  };

  function startCountdownHandler () {
    var clock = document.querySelector('.countdown__box');
    var daysInputValue = clock.querySelector('.days').value * 1000 * 60 * 60 * 24;
    var hoursInputValue = clock.querySelector('.hours').value * 1000 * 60 * 60;
    var minutesInputValue = clock.querySelector('.minutes').value * 1000 * 60;
    var secondsInputValue = clock.querySelector('.seconds').value * 1000;

    var deadline = new Date(Date.parse(new Date()) + daysInputValue + hoursInputValue + minutesInputValue + secondsInputValue);

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

  var closeMessageOverlayHandler = function (evt) {
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
  }

  startBtn.addEventListener('click', startCountdownHandler);
  resetBtn.addEventListener('click', resetCountdownHandler);
  document.addEventListener('click', closeMessageOverlayHandler);

})();
