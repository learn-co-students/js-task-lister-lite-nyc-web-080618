
document.addEventListener("DOMContentLoaded", () => {
  //const taskList = new TaskList();
  const commentForm = document.getElementById('create-task-form')
  const listContainer = document.getElementById("tasks")
  commentForm.addEventListener("submit", function(event){
    event.preventDefault()
    const userInput = event.target.querySelector("#new-task-description").value
    const liTag = document.createElement("li")
    const button = document.createElement("button")
    button.innerText = "delete"
    let dd = document.getElementById('chooseColor')
    let ddValue = dd.options[dd.selectedIndex].value
    liTag.innerHTML = `<li style="color:${ddValue}">${userInput}</li>`
    liTag.appendChild(button)
    listContainer.appendChild(liTag)
    event.target.reset()
  })
  listContainer.addEventListener("click", function(event){
    event.target.parentNode.remove()
  })
  // debugger
  // Array.from(listContainer.children).forEach(function(ul){
  //
  // })


});
