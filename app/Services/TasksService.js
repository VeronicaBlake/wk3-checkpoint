import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(i => i.id != id)
    if(window.confirm('Permanently Delete this Task?'))
    saveState()

  }
  addTask(newTask) {
    ProxyState.tasks.push(new Task(newTask.name, newTask.listId))
    saveState()
    ProxyState.tasks = ProxyState.tasks
  }

  completed(task){
    console.log(task)
    saveState()
  }
}

export const tasksService = new TasksService();