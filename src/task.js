const priorities = {low:'green',medium:'yellow',high:'red'}

class Task {
  constructor(content){
    this.content = content
  }

  priority(priority){
    this.priority = priority
  }

  render(){
    const color = priorities[this.priority]
    return `<li id='list-item'><font color=${color}>${this.content}   </font><button id=delete>Delete</button></li>`
  }
}
