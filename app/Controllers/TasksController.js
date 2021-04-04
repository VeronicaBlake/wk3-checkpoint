import { tasksService } from "../Services/TasksService.js";


//Public
export default class TasksController {
    addTask(listId){
    window.event.preventDefault()
    let form = window.event.target
    let rawTask = {
        name:form['name'].value,
        listId: listId
    }
    tasksService.addTask(rawTask)
    form.reset()
  }

  deleteTask(listId){
      tasksService.deleteTask(listId)
  }

//   check() {
//     tasksService.check()
//   }
//   uncheck() {
//     tasksService.uncheck()
//   }

  completed(bool, id){
      tasksService.completed(bool, id)
  }
}
