import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent
  }
]

export {
  routes
}