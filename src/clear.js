import task from './list';

export const clear = (e) => {
  const clicked = e.target.closest('.check');
  if (!clicked) return;
  const index = parseInt(clicked.getAttribute('data-clear'), 10);

  const checkIndex = task.find((element) => element.index === index);
  checkIndex.completed = !checkIndex.completed;

  localStorage.setItem('task', JSON.stringify(task));
};

export const clearAllTask = () => {
  const newArr = task.filter((element) => !element.completed);
  task.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  task.push(...newArr);
  localStorage.setItem('task', JSON.stringify(task));
};