class TaskList {

  static newTask(description, priority) {
    let task = new Task(description, priority);
    task.id = ++this.count;
    this.tasks.push(task);
    this.displayTask(task);
  }

  static displayAll(sort=false) {
    this.tasks.forEach(task => task.remove())
    if (sort===false) {
      this.tasks.forEach(task => this.displayTask(task));
    } else {
      this.sortAll(sort).forEach(task => this.displayTask(task));
    }
  }

  static sortAll(order) {
    let lookUp = {
      high: 3,
      medium: 2,
      low: 1
    }
    return this.tasks.slice().sort( (a, b) => {
      if (order==='asc') {
        return lookUp[a.priority] - lookUp[b.priority];
      } else {
        return lookUp[b.priority] - lookUp[a.priority];
      }
    })
  }

  static displayTask(task) {
    let taskEl = task.display();
    taskList.appendChild(taskEl);
  }

  static findTask(id) {
    return this.tasks.find(task => task.id === id);
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

  static editFormToggle() {}
}

TaskList.tasks = [];
TaskList.count = 0;
const taskList = document.querySelector('#tasks');

