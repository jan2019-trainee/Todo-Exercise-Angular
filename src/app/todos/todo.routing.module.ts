import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoComponent } from './todo.component';
import { TodosCreateComponent } from '../todos-create/todos-create.component';

const routes: Routes = [
    {
      path: "",
      component: TodoComponent
    },
    {
      path: ":userId",
      component: TodoComponent
     
    },
   
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TodoRoutingModule {}
  