
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();



toDoForm = document.querySelector('#create-task-form');
toDoList = document.querySelector('#tasks');
toDoDescription = document.querySelector('#new-task-description');

const renderTask = function(createdTask){
  const taskItem = document.createElement('li')
  taskItem.innerHTML = `
  <li>${createdTask}</li>
  `
  toDoList.append(taskItem)
}

toDoForm.addEventListener('submit', event => {
  event.preventDefault();
  let taskDescription = toDoDescription.value;
  taskList.createTask(taskDescription);
  renderTask(taskDescription);
  });


});