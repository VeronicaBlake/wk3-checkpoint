import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  deleteTask(id) {
    if(window.confirm('Permanently Delete this Task?'))
    ProxyState.tasks = ProxyState.tasks.filter(i => i.id != id)
    saveState()

  }
  addTask(newTask) {
    ProxyState.tasks.push(new Task(newTask.name, newTask.listId))
    saveState()
    ProxyState.tasks = ProxyState.tasks
  }

    checked(bool, id){
      ProxyState.tasks.find(i => i.id === id).checked = bool
      saveState()
      ProxyState.tasks = ProxyState.tasks
    }
}

export const tasksService = new TasksService();