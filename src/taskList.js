class TaskList {
    constructor() {
        this.all = [];
      }
      createTask(description){
          const newTask = new Task(description);
          this.all.push(newTask);
      };


     renderTasks(){
        this.all.forEach(function (t){
            const taskItem = document.createElement('li')
            taskItem.innerHTML = `
            <li>${t.description}</li>
            `
            toDoList.append(taskItem)
        });
    
    }
      
    }
    


