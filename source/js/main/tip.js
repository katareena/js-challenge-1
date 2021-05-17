(function () {
  // ----------------- tip -----------------
  const calculator = document.querySelector('.tip__inner');
  const billInput = calculator.querySelector('#tip-bill');
  const percentInput = calculator.querySelector('#sort');
  const percentAmountInput = calculator.querySelector('#tip-amount');
  const totalInput = calculator.querySelector('#tip-total');
  const peopleInput = calculator.querySelector('#tip-people');
  const perPersonInput = calculator.querySelector('#tip-per-person');

  function calculationTipHandler () {
    const tipPercent = parseFloat(percentInput.value * 0.01);
    const tipAmount = billInput.value * tipPercent;
    percentAmountInput.value = tipAmount;
    const totalAmount = parseFloat(billInput.value) + parseFloat(tipAmount);
    totalInput.value = totalAmount;
    perPersonInput.value = totalAmount / peopleInput.value;
  };

  const fieldsInput = calculator.querySelectorAll('.fields-js');

  fieldsInput.forEach(elem => {
    elem.addEventListener('change', calculationTipHandler);
  });
})();
