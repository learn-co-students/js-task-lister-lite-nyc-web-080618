class Task {

  constructor(input){
    this.input=input
  }

  show(){
    return `<li>${this.input}<button class="delete">X</button></li>`
  }
}
