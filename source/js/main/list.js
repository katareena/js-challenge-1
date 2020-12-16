'use strict';
(function () {
  var inner = document.querySelector('.list__inner');
  var input = inner.querySelector('#input-field');
  var btn = inner.querySelector('.list__btn');
  var reset = inner.querySelector('.list__reset');
  var list = inner.querySelector('.list__list');

  function deleteToDoItemHandler (elem) {
    var elemTarget = elem.currentTarget;
    elemTarget.classList.add('checked');
  };

  function addToDoItemHandler (evt) {
    evt.preventDefault();
    var displayItem = document.createElement('li');
    var inputValue = input.value;
    displayItem.textContent = inputValue;
    displayItem.className = 'list__item';

    if(inputValue) {
      list.appendChild(displayItem);
      input.value = '';
    }

    displayItem.addEventListener('click', deleteToDoItemHandler);
  };

  function resetToDoListHandler () {
    if (confirm('Are you agree to delete all activities?')) {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    }
  };

  btn.addEventListener('click', addToDoItemHandler);
  reset.addEventListener('click', resetToDoListHandler);

})();
