const formEl = document.querySelector("#create-task-form")
const descriptionEl = document.querySelector("#new-task-description")
const priorityEl = document.querySelector("#priority")
const taskListEl = document.querySelector("#tasks")
const sortBtn = document.querySelector("#sort")
const sortOrder = document.querySelector("#sort-order")

const editForm = document.querySelector("#edit-task-form")
const editDesc = document.querySelector("#edit-task-description")
const editPriority = document.querySelector("#edit-priority")
const editId = document.querySelector("#editId")
const cancelBtn = document.querySelector("#cancel")

const mainBoxEl = document.querySelector("#list")
const spin = document.querySelector("#spin")

document.addEventListener("DOMContentLoaded", () => {

  formEl.addEventListener('submit', event => {
    event.preventDefault()
    TaskList.newTask(descriptionEl.value, priorityEl.value)
    formEl.reset()
  })
  
  taskListEl.addEventListener('click', event => {
    if (event.target.nodeName === 'BUTTON') {
      taskId = parseInt(event.target.dataset.id);
      if (event.target.className === 'delete') {
        deleteElement(taskId)
      } else if (event.target.className === 'edit') {
        editElement(taskId)
      }
    }
  })

  editForm.addEventListener('submit', event => {
    event.preventDefault();
    TaskList.findTask(parseInt(editId.value))
      .update(editDesc.value, editPriority.value);
    editFormToggle();
  })

  sortBtn.addEventListener('click', event => 
    TaskList.displayAll(sortOrder.value)
  )

  cancelBtn.addEventListener('click', event => 
    editFormToggle()
  )

  spin.addEventListener('click', event =>
    spinOut(0)
  )

  TaskList.newTask("Complete Task Lister Lite project", "high")
  TaskList.newTask("Read some of Clean Code book", "medium")
  TaskList.newTask("Watch a couple of nodeJS lectures", "medium")
  TaskList.newTask("Eat a biscuit", "low")
  TaskList.newTask("Drink some coffee", "high")
  TaskList.newTask("Think about topic for blog", "medium")

  TaskList.displayAll()

});

function editElement(taskId) {
  let task = TaskList.findTask(taskId);
  editDesc.value = task.description;
  editPriority.value = task.priority;
  if (editId.value === 'none') { editFormToggle() };
  editId.value = task.id;
}

function updateElement(taskId) {

}

function deleteElement(taskId) {
  if (parseInt(editId.value) === taskId) {
    editFormToggle();
  }
  TaskList.deleteTask(taskId);
}

function editFormToggle() {
  if (editForm.style.display === 'none') {
    editForm.style.display = 'inline';
  } else {
    editId.value = 'none';
    editForm.reset();
    editForm.style.display = 'none';
  }
}

function spinOut(degree=0) {
  if (degree !== 361) {
    mainBoxEl.style.setProperty("-webkit-transform", `rotate(${degree}deg)`, null);
    setTimeout(() => spinOut(degree + 1), 0.5)
  }
}

