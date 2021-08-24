let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');
let todoClear = document.querySelector('.todo-clear');

// {
//   id: 1,
//   text: 'asdasdasdas',
//   isCompleted: false,
//   isImportant: false,
// }

let todos = [];

let addDeleteEvents = function (element) {
  element.addEventListener('click', (e) => {
    let id = Number(e.target.parentElement.getAttribute('data-id'));
    let index = todos.findIndex((todo) => {
      return todo.id === id
    });
    todos.splice(index, 1);
    updateTodos();
  });
}

priority.addEventListener('click', (e) => {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
        priority.textContent = 'Важная задача';
      } else {
        priority.textContent = 'Обычная задача';
      }
});

if(localStorage.todos) {
  todos = JSON.parse(localStorage.todos);
}

let updateTodos = function() {
  list.innerHTML = '';
  let json = JSON.stringify(todos);
  localStorage.setItem('todos', json);
  todos.forEach((todo) => {
    let li = document.createElement('li');
    li.textContent = todo.text;
    li.dataset.id = todo.id;
    if (todo.isImportant) {
      li.classList.add('is-important');
    }
  
    let checbox = document.createElement('input');
    checbox.setAttribute('type', 'checkbox');
  
    if(todo.isCompleted) {
      checbox.checked = todo.isCompleted;
      li.classList.add('completed');
    }
  
    li.append(checbox);
  
    checbox.addEventListener('click', (e) => {
      const isChecked = e.target.checked;
      if(isChecked) {
        let id = Number(e.target.parentElement.getAttribute('data-id'));
        let index = todos.findIndex((todo) => {
          return todo.id === id
        });
        todos[index].isCompleted = !todos[index].isCompleted;
        updateTodos();
      }
    })
  
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('delete-btn');
  
    li.append(deleteButton);
    addDeleteEvents(deleteButton);
  
    list.append(li);
  });
}

updateTodos();

form.onsubmit = function (e) {
  e.preventDefault();
  let important = priority.classList.contains('is-important');
  todos.push({
    id: todos[todos?.length -1]?.id + 1 || 1,
    text: input.value,
    isCompleted: false,
    isImportant: important,
  });
  updateTodos();
  input.value = '';
};

todoClear.addEventListener('click', () => {
    list.innerHTML = '';
    localStorage.removeItem('todos');
    todos = [];
  });

// let todosFromStorage = localStorage.getItem('todos');
// if (todos) {
//   list.innerHTML = todosFromStorage;

//   const deleteButtons = document.querySelectorAll('.delete-btn');
//   // console.log(deleteButtons);
//   deleteButtons.forEach((btn) => {
//     addDeleteEvents(btn);
//   })
// }


// priority.onclick = function () {
//   priority.classList.toggle('is-important');
  
//   if (priority.classList.contains('is-important')) {
//     priority.textContent = 'Важная задача';
//   } else {
//     priority.textContent = 'Обычная задача';
//   }
// };

// form.onsubmit = function (evt) {
//   evt.preventDefault();
  // let newItem = document.createElement('li');
  // newItem.textContent = input.value;
  // if (priority.classList.contains('is-important')) {
  //   newItem.classList.add('is-important');
  // }

  // let checbox = document.createElement('input');
  // checbox.setAttribute('type', 'checkbox');

  // newItem.append(checbox);

  // checbox.addEventListener('click', (e) => {
  //   const isChecked = e.target.checked;
  //   if(isChecked) {
  //     e.target.parentElement.classList.add('completed');
  //   } else {
  //     e.target.parentElement.classList.remove('completed');
  //   }
  // })

  // let deleteButton = document.createElement('button');
  // deleteButton.textContent = 'Удалить';
  // deleteButton.classList.add('delete-btn');

  // addDeleteEvents(deleteButton);

  // newItem.append(deleteButton);
  // list.append(newItem);
//   localStorage.setItem('todos', list.innerHTML);
//   input.value = '';

  
// };

// todoClear.addEventListener('click', () => {
//   list.innerHTML = '';
//   localStorage.removeItem('todos');
// });