import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todo.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodosUpdateModalFormComponent } from './todos-update-modal-form/todos-update-modal-form.component';
import { TodosDeleteModalFormComponent } from './todos-delete-modal-form/todos-delete-modal-form.component';
import { TodosCreateModalFormComponent } from './todos-create-modal-form/todos-create-modal-form.component';


@NgModule({
  declarations: [TodoComponent,
    TodosUpdateModalFormComponent,
    TodosDeleteModalFormComponent,
    TodosCreateModalFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TodoRoutingModule,
    NgbModule
  ],
  entryComponents:[
    TodosUpdateModalFormComponent,
    TodosDeleteModalFormComponent,
    TodosCreateModalFormComponent
  ]
})
export class TodoModule { }
