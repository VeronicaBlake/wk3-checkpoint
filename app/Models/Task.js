import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(name, listId, taskCount, id = generateId()) {
    this.name = name
    this.listId = listId
    this.taskCount = taskCount
    this.id = id
  }

  get Template() {
    return `<ul class = "list-group">
      <li class = "list-group-item"><input id = "box" type="checkbox"> 
      ${this.name}<i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li></ul>`
  }
}