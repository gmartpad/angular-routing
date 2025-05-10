import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";

const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
]

export {
  routes
}