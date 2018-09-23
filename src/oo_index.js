
document.addEventListener("DOMContentLoaded",() => {
  const taskList = new TaskList();
  const create_task_form = document.getElementById("create-task-form");

  const commentsContainer = document.getElementById('tasks');
  create_task_form.addEventListener("submit",function(event){
    event.preventDefault()
    const input = document.getElementById('new-task-description').value
    taskList.addTask(input)
    commentsContainer.innerHTML=taskList.show()
    event.target.reset()
  })

  commentsContainer.addEventListener('click',function(e){
    if (e.target.classList.contains('delete')) {
       if(confirm('Are You Sure?')){
      taskList.deleteTask(e.target.previousSibling.textContent)
      //delete selected task
      commentsContainer.innerHTML=taskList.show()
    }
    }
  })
}
);
