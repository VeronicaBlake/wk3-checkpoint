import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    if(window.confirm('Permanently Delete this List?'))
    saveState()
  }
  addList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList.name, newList.color)]
    saveState()
  } 
}

export const listsService = new ListsService();