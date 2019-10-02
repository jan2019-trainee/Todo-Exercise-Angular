import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { TodoComponent } from "./todos/todo.component";
import { UsersCreateComponent } from "./users-create/users-create.component";
import { TodosCreateComponent } from "./todos-create/todos-create.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users-create",
    component: UsersCreateComponent
  },
  {
    path: "todos",
    component: TodoComponent
  },
  {
    path: "todos/:userId",
    component: TodoComponent
  },
  {
    path: "todos-create",
    component: TodosCreateComponent
  },
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
