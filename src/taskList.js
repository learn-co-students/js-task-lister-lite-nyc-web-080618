
class TaskList {
   constructor(){
     this.tasks = []
   }

   addTask(description){
     let task = new Task(description)
     this.tasks.push(task)
   }

   deleteTask(description){
     this.tasks=this.tasks.filter(task=>task.input!= description)
   }
   show(){
     return this.tasks.map(task=>task.show()).join(" ")
   }
}
