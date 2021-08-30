const list = document.querySelector('.todo-list');
const input = document.querySelector('.todo-input');
const form = document.querySelector('.todo-form');
const priority = document.querySelector('.todo-priority');
const todoClear = document.querySelector('.todo-clear');

let todos = [];

const addDeleteEvents = (element) => {
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

const updateTodos = () => {
  list.innerHTML = '';
  const json = JSON.stringify(todos);
  localStorage.setItem('todos', json);
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    li.dataset.id = todo.id;
    if (todo.isImportant) {
      li.classList.add('is-important');
    }
  
    const checbox = document.createElement('input');
    checbox.setAttribute('type', 'checkbox');
  
    if(todo.isCompleted) {
      checbox.checked = todo.isCompleted;
      li.classList.add('completed');
    }
  
    li.append(checbox);
  
    checbox.addEventListener('click', (e) => {
      let id = Number(e.target.parentElement.getAttribute('data-id'));
      let index = todos.findIndex((todo) => {
        return todo.id === id
      });
      todos[index].isCompleted = !todos[index].isCompleted;
      updateTodos();
    })
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('delete-btn');
  
    li.append(deleteButton);
    addDeleteEvents(deleteButton);
  
    list.append(li);
  });
}

updateTodos();

form.onsubmit = (e) => {
  e.preventDefault();
  const important = priority.classList.contains('is-important');
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

