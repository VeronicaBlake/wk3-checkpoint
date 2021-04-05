import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(name, listId, total, completed, id = generateId(), checked) {
    this.name = name
    this.listId = listId
    this.total = total
    this.completed = completed
    this.id = id
    this.checked = checked
  }

  get Template() {
    return `<ul class = "list-group">
      <li class = "list-group-item"><input id = "box" aria label ="check box" type="checkbox" onclick="app.tasksController.checked(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''}> 
      ${this.name} <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li></ul>`
  } 
  }

  //I want the delete function to subtract one from total. 
  //I want the add item to add one to the total