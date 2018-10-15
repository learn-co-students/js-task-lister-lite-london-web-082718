class Task {

  constructor(description, priority) {
    this.description = description;
    this.priority = priority;
  }

  display() {
    this.element = document.createElement('div');
    this.element.innerHTML = this.render()
    return this.element
  }

  update(description, priority) {
    this.description = description;
    this.priority = priority;
    this.element.innerHTML = this.render()
  }

  render() {
    return `
    <p>
      ${this.description} 
      [<span style="color: ${this.priorityColor(this.priority)}">
      ${this.priority} priority
      </span>]
      <button class="delete" data-id=${this.id}>Delete</button>
      <button class="edit" data-id=${this.id}>Edit</button>
    </p>
    `
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




