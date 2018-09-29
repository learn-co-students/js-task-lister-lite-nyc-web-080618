let taskId = 0;

class Task {
  constructor(content){
    this.id = ++taskId;
    this.content = content;
    allTasks.push(this)
  }
}

allTasks = [];
