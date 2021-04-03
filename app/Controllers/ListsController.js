import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState } from "../Utils/LocalStorage.js";


//Private
function _draw() {
  let lists = ProxyState.lists;
  let template = ''
  if (lists.length == 0) {
    template += '<div class="col text-center"><p><em>No Lists</em><p></div>'
  }
  lists.forEach(p => template += p.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on("lists", _draw);
    ProxyState.on("tasks", _draw);
    loadState()
    _draw()
  }

  changeColor(){
      listsService.changeColor()
  }

  addList() {
    window.event.preventDefault()
    let form = window.event.target
    let rawList = {
      name: form['name'].value,
      color: form['color'].value
    }
    listsService.addList(rawList)
    form.reset()
  }

  deleteList(listId) {
    listsService.deleteList(listId)
  }
}