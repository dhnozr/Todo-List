// take inputBox
const inputBox = document.querySelector('#input-box');

// we will add list items to this container
const listContainer = document.querySelector('.list-container');

const addBtn = document.querySelector('#add-btn');

// add event listener
addBtn.addEventListener('click', addTodo);

function addTodo(e) {
  e.preventDefault();
  if (!inputBox.value) {
    return;
  } else {
    const liEl = document.createElement('li');
    liEl.innerText = inputBox.value;
    listContainer.appendChild(liEl);

    const spanEl = document.createElement('span');
    spanEl.innerHTML = '\u00d7';

    liEl.appendChild(spanEl);
  }
  inputBox.value = '';
}
