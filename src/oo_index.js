
document.addEventListener("DOMContentLoaded", () => {
  //const taskList = new TaskList();

  const taskForm = document.getElementById('create-task-form')
  const taskContainer = document.getElementById('tasks')
  taskForm.addEventListener('submit', function(event){
    event.preventDefault()
    const userInput = event.target.querySelector('#new-task-description').value
    const pTag = document.createElement('p')
    const deleteButton = document.createElement('BUTTON')
    deleteButton.setAttribute('value','delete this task')
    //const newText = userInput + deleteButton
    //debugger
    //pTag.innerText = userInput




    function deleteTask(){
      debugger
    }

    taskContainer.innerHTML += `<p>${userInput}<button type="button" onclick=deleteTask();>Delete this task!</button></p>`
    event.target.reset()




  })
});
