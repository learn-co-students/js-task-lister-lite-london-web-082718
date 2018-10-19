form 
input 
tasks 

// Get elements from page
const form = document.getElementById('create-task-form')
const inputEl = document.getElementById('new-task-description')
const listEl = document.getElementById('tasks')
const prorityEl = document.getElementById('priority-selection')


form.addEventListener("submit", event => {
    event.preventDefault()
    const text = inputEl.value
    const priotriy = prorityEl.value
    taskList.addTaskToList(text, priotriy)
    // addListItem(text)
    // inputEl.value = "" >> good for multiple input fields 
    event.target.reset()
  })

 
  
























// const addListItem = text => {
//     const listItemEl = documentCreateElement('li')
//     // listItemEl.id = `todo-item-${counter++}` no longer needed 
//     listItemEl.innerHTML = `
//         ${text}
//         <button id='delete-button'>X<button>
//     `
//     const buttonEl = listItemEl.querySelector('#button-button')
//     buttonEl.addEventListener('click', event => {
//         listItemEl.remove()
//     })
//     listEl.appendChild(listItemEl)
// }

