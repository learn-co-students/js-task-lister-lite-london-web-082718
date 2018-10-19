class TaskList {

    // if we use statuc no need ot instatiant the construcotr 
    // constructor() {
    //     this.tasks = []
    //     this.listEl = document.getElementById('tasks')
    //     let counter = 0
    // }

    static addTaskToList(text, priority) {
        const task = new Task(text, this.id++, priority)
        const taskEl = task.render()
        this.tasks.push(task)
        const buttonEl = taskEl.querySelector('#delete-button')
        buttonEl.addEventListener('click', event => {
            this.removeTaskFromList(task.id)
        })
        this.listEl.appendChild(taskEl)
    }

    static removeTaskFromList(id) {
        const task = this.tasks.find(task => task.id === id)
        this.tasks = this.tasks.filter(task => task.id !== id)
        task.remove()
    }

}

TaskList.tasks = []
TaskList.listEl = document.getElementById('tasks')
TaskList.id = 0 

// to manually add to the list
// taskList.addTaskToList()


    // taskList is initialized with an empty array
    // constructor() {
    //     this.tasks = [];
    // }

    // createNewTask(description) {
    //     const newTask = new Task(description);
    //     this.tasks.push(newTask);
    // }

    // renderTasks() {
    //     return this.tasks.map((task) => task.render() )
    // }

    // deleteTask(description) {
    //     this.tasks = this.tasks.filter((task) => task.description !== description )
    // }