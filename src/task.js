class Task {
    constructor (taskData) {
        this.name = taskData.name
        this.id = taskData.id
    }


    render () {
        if (this.taskEl) return this.taskEl

        const taskItem = document.createElement('li')
        taskItem.innerHTML = `<h2>${this.name}</h2> `

        this.taskEl = taskItem

        return this.taskEl
    }

    remove () {
        this.taskEl.remove()
    }
}