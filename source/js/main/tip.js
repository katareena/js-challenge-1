'use strict';
(function () {
  var calculator = document.querySelector('.tip__inner');
  var billInput = calculator.querySelector('#tip-bill');
  var percentInput = calculator.querySelector('#sort');
  var percentAmountInput = calculator.querySelector('#tip-amount');
  var totalInput = calculator.querySelector('#tip-total');

  function calculationTipHandler () {
    var tipPercent = parseFloat(percentInput.value * 0.01);
    var tipAmount = billInput.value * tipPercent;
    percentAmountInput.value = tipAmount;
    var totalAmount = parseFloat(billInput.value) + parseFloat(tipAmount);
    totalInput.value = totalAmount;
  };

  var fieldsInput = calculator.querySelectorAll('.fields-js');

  fieldsInput.forEach(elem => {
    elem.addEventListener('change', calculationTipHandler);
  });

  // billInput.addEventListener('change', calculationTipHandler);
  // percentInput.addEventListener('change', calculationTipHandler);
})();
