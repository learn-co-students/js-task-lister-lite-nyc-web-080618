let taskId = 0;
let tasks = []
class Task {
  constructor(description,listObj) {
    this.description = description;
    this.list = listObj
    this.id = ++taskId;
    
    tasks.push(this)
  }

  delete(list) {
    let deletion = list.indexOf(this);
    list.splice(deletion,1);
    return list;
  }
}
