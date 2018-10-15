document.addEventListener("DOMContentLoaded", () => {

  formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    TaskList.newTask(descriptionEl.value, priorityEl.value)
    formEl.reset()
  })
  
  taskListEl.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      TaskList.deleteTask(parseInt(event.target.dataset.id));
    }
  })

  TaskList.displayAll()

});

const formEl = document.querySelector("#create-task-form")
const descriptionEl = document.querySelector("#new-task-description")
const priorityEl = document.querySelector("#priority")

const taskListEl = document.querySelector("#tasks")

