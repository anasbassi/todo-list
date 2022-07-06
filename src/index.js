/* eslint-disable*/
import _ from 'lodash';
import './style.css';

const toDoList = [
  {
    description: 'say prayers',
    completed: false,
    index: 1,
  },
  {
    description: 'clean the house',
    completed: true,
    index: 2,
  },
  {
    description: 'cook breakfast',
    completed: false,
    index: 3,
  },
  {
    description: 'do laundry',
    completed: false,
    index: 4,
  },
];

const list = () => {
  const listContent = document.querySelector('.lists');
  for (let i = 0; i < toDoList.length; i += 1) {
    const toDo = document.createElement('li');
    toDo.classList.add('list-item');
    toDo.innerHTML = `
       <div class="check">
  <input class="checkbox" type="checkbox">
  <p>${toDoList[i].description}</p>
  </div>
  <div class="icon">
  <hr>
  </div>
    `;
    listContent.appendChild(toDo);
  }
};

list();