
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  // GET SUBMISSION
  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", function(event){
    event.preventDefault()
    const allLis = document.getElementsByTagName("li")
    debugger
    for (const item of allLis) { (item) => item.remove()}


    const newTask = new Task(event.target.querySelector("#new-task-description").value, taskList)
    debugger
  // CREATE ELEMENTS

    const todos = document.querySelector("#tasks")
    debugger
    taskList.tasks().forEach( function (taskItem) {
      const li = document.createElement("li")
      li.innerText = taskItem.description;
      const btn = document.createElement("button")
      // btn.addEventListener("click",taskItem.delete)
      li.appendChild(btn)
      todos.appendChild(li)
    }.bind(this))



    // RESET FORM
    event.target.reset();
  })
});
