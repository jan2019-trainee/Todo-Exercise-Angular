import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todo.routing.module';


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
