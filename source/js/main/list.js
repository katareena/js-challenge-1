(function () {
  // ----------------- to do list -----------------
  const inner = document.querySelector('.list__inner');
  const input = inner.querySelector('#input-field');
  const btn = inner.querySelector('.list__btn');
  const reset = inner.querySelector('.list__reset');
  const list = inner.querySelector('.list__list');

  function deleteToDoItemHandler (elem) {
    const elemTarget = elem.currentTarget;
    elemTarget.classList.add('checked');
  };

  function addToDoItemHandler (evt) {
    evt.preventDefault();
    const displayItem = document.createElement('li');
    const inputValue = input.value;
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
