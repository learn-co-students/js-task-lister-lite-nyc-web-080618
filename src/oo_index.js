
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const formElement = document.getElementById('create-task-form')
  const list = document.getElementById('tasks')


  document.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(formElement.elements['new-task-description'].value){
      const taskObj = new Task(formElement.elements['new-task-description'].value)
      taskObj.priority = formElement.elements['priority'].value
      taskList.tasks.push(taskObj)
      list.innerHTML += taskObj.render()
      formElement.reset()
    }
  })

  document.addEventListener('click',(e)=>{
    if(e.target.id === 'delete'){
      e.target.parentNode.remove()
    }
  })

});
