
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  const taskForm = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')


  taskForm.addEventListener('submit', function(event){
    event.preventDefault();
    const userInput = event.target.querySelector('#new-task-description').value
    const liTag = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete"
    liTag.innerText = userInput
    liTag.className = userInput
    deleteButton.className = userInput
    deleteButton.onclick = function(){
      const removeItems = document.getElementsByClassName(deleteButton.className)
      const arr = Array.from(removeItems)
      arr.forEach(function(item){
        item.remove();
      })
    }

    taskList.appendChild(liTag)
    liTag.appendChild(deleteButton)
    event.target.reset()
  })







});
