let listId = 0
class TaskList {
  constructor() {
    this.id = ++listId
  }
  tasks () {
    return tasks.filter( function (task) {
      return task.list.id == this.id
    }.bind(this) )
  }
}
