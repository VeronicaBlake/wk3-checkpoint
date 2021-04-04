import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(name, listId, checked, id = generateId()) {
    this.name = name
    this.listId = listId
    this.checked = checked
    this.id = id
  }

  get Template() {
    return `<ul class = "list-group">
      <li class = "list-group-item"><input id = "box" aria label ="check box" type="checkbox" onclick="app.tasksController.completed(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''}> 
      ${this.name}<i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li></ul>`
  } 
  }