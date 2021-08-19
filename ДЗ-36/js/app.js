let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');
let todoClear = document.querySelector('.todo-clear');

let addDeleteEvents = function (element) {
  console.log(element);
  element.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    localStorage.setItem('todos', list.innerHTML);
  });
}

let todosFromStorage = localStorage.getItem('todos');
if (todosFromStorage) {
  list.innerHTML = todosFromStorage;

  const deleteButtons = document.querySelectorAll('.delete-btn');
  // console.log(deleteButtons);
  deleteButtons.forEach((btn) => {
    addDeleteEvents(btn);
  })
}


priority.onclick = function () {
  priority.classList.toggle('is-important');
  
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  let newItem = document.createElement('li');
  newItem.textContent = input.value;
  if (priority.classList.contains('is-important')) {
    newItem.classList.add('is-important');
  }

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  deleteButton.classList.add('delete-btn');

  addDeleteEvents(deleteButton);

  newItem.append(deleteButton);
  list.append(newItem);
  localStorage.setItem('todos', list.innerHTML);
  input.value = '';
};

todoClear.addEventListener('click', () => {
  list.innerHTML = '';
  localStorage.removeItem('todos');
});



  



