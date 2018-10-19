
document.addEventListener("DOMContentLoaded", () => {

  // initialize taskList class
  // const taskList = new TaskList();

  const form = document.getElementById('create-task-form')
  const inputEl = document.getElementById('new-task-description')
  const listEl = document.getElementById('tasks')
  const priorityEl = document.getElementById('priority-selection')


  form.addEventListener("submit", event => {
      event.preventDefault()
      const text = inputEl.value
      const priority = priorityEl.value
      TaskList.addTaskToList(text, priority)
      // addListItem(text)
      // inputEl.value = "" >> good for multiple input fields 
      event.target.reset()
    })

// End of   
})

















// //Get form and relevant input fields
// const form = document.getElementById('create-task-form')
// const taskDescription = document.getElementById('new-task-description')
// const deleteBtn = document.querySelectorAll('.removeBtn')

//  //ul where new tasks will live on the DOM
//  const listDiv = document.getElementById('tasks')

// //  Create function to render apps which we can call when the eventlistener below
// //  is activated

// const renderAllTasks = function() {
//    listDiv.innerHTML = taskList.renderTasks();
// }

//  //Add event listener to add button
// form.addEventListener("submit", event => {
//   event.preventDefault()
//   console.log('hello')
//   taskList.createNewTask(taskDescription.value)
//   event.target.reset()
//   renderAllTasks()
// })

  //   // Iterate all nodes
  //   deleteBtn.forEach(btn => {
  //   // Attach event listener. Note to preserve the button this-reference
  //   // by using the non-shorthand function
  //   btn.addEventListener('click', function() {
  //     console.log('Click!')
  //       let li = this.parentNode
  //       li.remove()
  //   })
  //   })

  // })
      
      
