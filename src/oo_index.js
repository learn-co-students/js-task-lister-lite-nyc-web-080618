
document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");
  const newDescription = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

//step 1 add task to the list;
  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newTask = new Task(newDescription.value);
    list.innerHTML += `<li data-id="${newTask.id}">${newTask.content} <button data-id="${newTask.id}">x</button></li>`;
    event.target.reset();
  })

//step 2 delete tasks
  list.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON"){
      let taskId = event.target.dataset.id;
      let targetTask = allTasks.find(task => task.id == taskId);
      let targetTasks = allTasks.filter(task => task.content === targetTask.content);
      if (targetTasks.length > 1){
        for (const task of targetTasks){
          document.querySelectorAll(`[data-id="${task.id}"]`)[0].remove();
        }
      } else {
        document.querySelector(`[data-id="${targetTasks[0].id}"]`).remove();
      }
    }
  })

});
