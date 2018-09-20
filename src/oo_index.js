document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form')
  const taskContainer = document.getElementById('tasks')
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const userInput = event.target.querySelector('#new-task-description').value
    const pTag = document.createElement('p')
    pTag.innerText = userInput

    taskContainer.appendChild(pTag)
    event.target.reset()
  })

});