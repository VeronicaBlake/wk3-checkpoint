import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";

//title in html goes in localStorage.log('')
export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.lists = data.lists.map(list => new List(list.name, list.color, list.id));
    ProxyState.tasks = data.tasks.map(task => new Task(task.name, task.listId, task.total, task.completed, task.id, task.checked));
  }
  let checked = JSON.parse(localStorage.getItem('box'))
  if (checked == true){
      document.getElementById("box").checked = true;
  }
}