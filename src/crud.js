
import { clear, clearAllTask } from './clear.js';
import task from './list.js';

const clearAll = document.querySelector('.btn');
const addBtn = document.querySelector('.enter');
const todoInputEl = document.querySelector('.add');
const oneContainer = document.querySelector('.lists');

const renderTasks = () => {
  oneContainer.innerHTML = '';
  task.forEach((element) => {
    const oneContainer = document.querySelector('.lists');
    const chore = document.createElement('div');
    const flag = element.completed ? 'checked' : '';
    chore.classList.add('list-info');
    chore.innerHTML = ` <div class="check">
              <input type="checkbox"  class="check" data-clear="${element.index}" ${flag}>
              <input type="text" class="todo" data-desc="${element.index}" value="${element.description}"/>
              <div class="icon">
              <button class="remove" id="${element.index}">
              <i class="fa-solid fa-trash-can"></i>
              </button>
              </div>
              </div>
              <hr>
                `;
    oneContainer.appendChild(chore);
  });
};
renderTasks();

addBtn.addEventListener('click', (e) => {
  const input = todoInputEl.value;
  e.preventDefault();
  todoInputEl.value = '';
  if (!input) return;
  const obj = {
    description: input,
    completed: false,
    index: task.length + 1,
  };
  task.push(obj);
  localStorage.setItem('task', JSON.stringify(task));
  renderTasks();
});

const removeTask = (index) => {
  const newArr = task.filter((element) => element.index !== index);
  task.length = 0;
  let i = 1;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  task.push(...newArr);
  localStorage.setItem('task', JSON.stringify(task));
  renderTasks();
};

oneContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});

const update = (e) => {
  const clicked = e.target.closest('.todo');

  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    const targetData = parseInt(clicked.getAttribute('data-desc'), 10);
    const update = task.find((element) => element.index === targetData);

    update.description = clicked.value.trim();
    localStorage.setItem('task', JSON.stringify(task));
  });
};

oneContainer.addEventListener('click', update);

oneContainer.addEventListener('click', clear);
clearAll.addEventListener('click', () => {
  clearAllTask();
  renderTasks();
});