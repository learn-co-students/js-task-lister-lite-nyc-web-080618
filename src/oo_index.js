document.addEventListener("DOMContentLoaded", function() {
  // first, grab the form that the user will submit from (create-task-form)
  const createTasksForm = document.getElementById('create-task-form')
  // second, grab the element that we want our users to add comments to
  // where these elements will live on the DOM
  const newTask = document.getElementById('tasks')
  // add an event listener to the form users will be submitting from
  createTasksForm.addEventListener('submit', function(event){
    // prevent the submission from posting anywhere other than where we specify
    event.preventDefault()
    // set a user input variable for the event
    const userInput = event.target.querySelector('#new-task-description').value
    // set the InnerHTML equal to the user input for the submission
    newTask.innerHTML += `<li>${userInput}</li>`
    // reset the event target so that the user doesn't have to delete the value from the form
    event.target.reset()
  })
});
