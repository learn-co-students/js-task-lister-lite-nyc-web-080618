
document.addEventListener("DOMContentLoaded", () => {
  // makes sure HTML loads before we invoke JS
  const taskList = new TaskList();
  // create new TaskList

  const tasks = document.getElementById("tasks");
  // selecting element that has the ID of "tasks"

  const createTaskForm = document.getElementById("create-task-form");
  // selecting element that has the ID 'create-task-form'

  createTaskForm.addEventListener('submit', function(event){
    // listening for a submit button to be clicked
    event.preventDefault();
    // normally a form sends a POST request, this prevents that post request

    const userInput = createTaskForm.querySelector("#new-task-description").value;
    // getting ID 'new-task-description' that lives INSIDE createTaskForm 's value

    const newTask = new Task(userInput);
    // create a new object from Task class
    // that object has a this.description = userInput
    taskList.taskArray.push(newTask);
    // getting the newTask and pushing it into taskList.taskArray

    rerenderTasks();
    event.target.reset();
    // reset the form
  });

  function rerenderTasks(){
    tasks.innerHTML = "";
    // delete previous html
    taskList.taskArray.forEach( (task) => {
      const taskItem = document.createElement("li");
      // <li></li>
      const button = document.createElement("button");
      // <button></button>

      button.innerText = "delete this shit"
      // <button>delete this shit</button>
      button.id = `button-${task.id}`
      // <button id="button-1">delete this shit</button>

      button.onclick = deleteTask;
      // <button id="button-1" onclick="deleteTask(this)"></button>

      taskItem.innerText = task.description;
      // <li>description</li>
      taskItem.appendChild(button);
      // <li>
      //  description
      //  <button id="button-1" onclick="deleteTask(this)">delete this shit</button>
      // </li>

      tasks.appendChild(taskItem);
      // <ul>
      // append taskItem <li></li>
      // </ul>
    });
  }

  function deleteTask(button){
    const buttonId = button.target.id;
    // "button-1"
    const taskId = buttonId.split("-")[1];
    // "button", "1" -> "1"

    delete taskList.taskArray[taskId - 1];
    // goodbye task

    rerenderTasks();
  }

});
