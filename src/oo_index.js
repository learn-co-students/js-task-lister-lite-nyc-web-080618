
document.addEventListener("DOMContentLoaded", function(){

    //form the user will submit from
    const taskForm = document.getElementById('create-task-form')
    //div we want to add comments to
    const newTaskDescription = document.getElementById('tasks')

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault() //**stops the form from sending a post request**

        const userInput = event.target.querySelector('#new-task-description').value
        console.log(userInput)

        newTaskDescription.innerHTML += `<li>${userInput}</li>` //this will add tasks
        event.target.reset()
    })

});
