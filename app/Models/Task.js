import { generateId } from "../Utils/GenerateId.js"


export default class Task {
  constructor(name, listId, id = generateId()) {
    this.id = id
    this.name = name
    this.listId = listId
  }

  get Template() {
    return `<ul class = "list-group">
      <li class = "list-group-item"><input type="checkbox"> ${this.name} <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>`
  }
}