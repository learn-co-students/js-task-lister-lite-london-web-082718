class TaskList {

  static newTask(description, priority) {
    let task = new Task(description, priority);
    task.id = ++this.count;
    this.tasks.push(task);
    this.displayTask(task);
  }

  static displayAll() {
    this.tasks.forEach(task => this.displayTask(task));
  }

  static displayTask(task) {
    let taskEl = task.display();
    taskList.appendChild(taskEl);
  }

  static deleteTask(id) {
    let index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) {
      return false;
    } else {
      this.tasks[index].remove();
      this.tasks.splice(index, 1);
      return true;
    }
  }
}

TaskList.tasks = [];
TaskList.count = 0;
const taskList = document.querySelector('#tasks');

