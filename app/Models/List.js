import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, color, id = generateId()) {
    this.id = id
    this.name = name
    this.color = color
  }


  get Template() {
    return`
    <div class="col-md-4">
      <div class="list-card shadow bg-white rounded">
          <div class="text-center ${this.color} p-2 d-flex justify-content-between">
              <h3>${this.name}</h3>
              <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
          </div>
          <div class="p-3">
            <ul>
              ${this.Tasks}
            </ul>
          </div>
          <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
              <input type="text" name="name" id="name" class="form-control" placeholder="Task" aria-describedby="helpId" required minlength="3" maxlength="50">
              <button type="submit" class="btn btn-success" title='add Task'><i class="fas fa-plus"></i></button>
          </form>
      </div>
    </div>`
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter(t => t.listId === this.id)
    let template = ''
    tasks.forEach(t => template += t.Template)
    return template
  }

}