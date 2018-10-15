class Task {

  constructor(description, priority) {
    this.description = description;
    this.priority = priority;
  }

  display() {
    let taskEl = document.createElement('div');
    taskEl.innerHTML = `
    <p>
      ${this.description} 
      [<span style="color: ${this.priorityColor(this.priority)}">
      ${this.priority} priority
      </span>]
      <button data-id=${this.id} style="font-size: 12px">Delete</button>
    </p>
    `
    this.element = taskEl;
    return taskEl;
  }

  remove() {
    this.element.remove();
  }

  priorityColor(priority) {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
    }
  }

}




