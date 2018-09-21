document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  const taskForm = document.getElementById('create-task-form')

  taskForm.addEventListener('submit', function(event){
    event.preventDefault();
    const userInput = event.target.querySelector('#new-task-description').value
    const taskList = document.getElementById('tasks')
    const liTag = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = "X"
    liTag.innerText = userInput
    liTag.className = userInput
    button.className = userInput
    taskList.appendChild(liTag)
    liTag.appendChild(button)
    button.onclick = function(){
      let items_to_remove = document.getElementsByClassName(button.className)
      let new_array = Array.from(items_to_remove)

      new_array.forEach(function(item){
        item.remove()
      })
    }
    


    event.target.reset()
  })

})
