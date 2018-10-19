
// Creates an individual task
// Is the model

class Task {

    constructor(text, id, priority) {
        this.text = text
        this.id = id 
        this.priority = priority
    }

    render () {
        const listItemEl = document.createElement('li')
        listItemEl.id = `todo-item-${this.id}`
        
        listItemEl.className = this.priority
        listItemEl.innerHTML = `
            ${this.text}
            <button id='delete-button'>X</button>
        `
        this.taskEl = listItemEl
        // debugger 
        return listItemEl
        
    }

    remove () {
        this.taskEl.remove()
    } 



// const addListItem = text => {
//     const listItemEl = documentCreateElement('li')
    // listItemEl.id = `todo-item-${counter++}` no longer needed 
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




}






    // display () {
    //     this.element = document.createElement('div')
    //     this.element.innerHTML = this.render()
    //     return this.element 
    // }

    // render() {

    //     return `
    //     <p>
    //     ${this.description} 
    //     <button class="delete" data-id=${this.id}>Delete</button>
    //     </P>
    //     `
    //   }

    // remove () {
    //     this.element.remove()
    // } 




