class TaskList {
let taskListId = 0;

constructor(tasks){
  this.taskListId = ++taskListId
  this.tasks = []
  
}

// document.addEventListener("DOMContentLoaded", () => {
//   // const taskList = new TaskList();
//   const taskForm = document.getElementById('create-task-form')
//   const taskList = document.getElementById('tasks')
//
//   taskForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     const userInput = event.target.querySelector('#new-task-description').value
//     const liTag = document.createElement('li')
//     liTag.innerText = userInput
//     taskList.appendChild(liTag)
//     event.target.reset()
//   })
// });

}
