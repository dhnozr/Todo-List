// take inputBox
const inputBox = document.querySelector('#input-box');

// we will add list items to this container
const listContainer = document.querySelector('#list-container');

const addBtn = document.querySelector('#add-btn');

// add event listener
addBtn.addEventListener('click', addTodo);
