document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const form = document.getElementById('create-task-form')

  form.addEventListener("submit", function(event){
    event.preventDefault()

    const userInput = event.target.querySelector("#new-task-description").value
    const ulList = document.getElementById("tasks")

    const new_task_li = document.createElement("li")
    const new_button = document.createElement("button")

    new_button.innerHTML = "Delete"
    new_task_li.innerText = userInput
    new_task_li.className = userInput
    new_button.className = userInput
    new_button.onclick = function () {
      let items_to_remove = document.getElementsByClassName(new_button.className)
      let new_array = Array.from(items_to_remove)
      new_array.forEach(function(item){
        item.remove()
      })
    }
    ulList.appendChild(new_task_li)
    new_task_li.appendChild(new_button)
    event.target.reset()
  })
}); //end all
