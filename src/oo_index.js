


document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const taskForm = document.querySelector('#create-task-form')
  const taskNameInput = document.querySelector('#new-task-description')
  const taskListEl = document.querySelector('#tasks')

  taskForm.addEventListener('submit', event => {
    event.preventDefault()

    const task = taskNameInput.value
    const liTask = document.createElement('li')
    

    // add task to litASK
    liTask.innerHTML = `
      ${task}
      <button id=taskIdStuff>Sensei Ali</button>
    `
    
    // APPEND TO TASK LIST 
    taskListEl.appendChild(liTask)

    // event for the delete button
    const butt = liTask.querySelector('button')
    butt.addEventListener('click', event =>{
      liTask.remove()
    })
  })



});
