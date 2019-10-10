import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todos/todo.module';
import { UsersDetailsModule } from './users-details/users-details.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { TodosUpdateModalFormComponent } from './todos/todos-update-modal-form/todos-update-modal-form.component';
import { TodosDeleteModalFormComponent } from './todos/todos-delete-modal-form/todos-delete-modal-form.component';
import { TodosCreateModalFormComponent } from './todos/todos-create-modal-form/todos-create-modal-form.component';
import { UsersCreateModalFormComponent } from './users/users-create-modal-form/users-create-modal-form.component';
import { UsersDeleteModalFormComponent } from './users/users-delete-modal-form/users-delete-modal-form.component';
import { UrlChekerDirective } from './users/directive/url-cheker.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    TodosUpdateModalFormComponent,
    TodosDeleteModalFormComponent,
    TodosCreateModalFormComponent,
    UsersCreateModalFormComponent,
    UsersDeleteModalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    UsersDetailsModule,
    TodoModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    UserUpdateComponent,
    UsersDeleteModalFormComponent,
    UsersCreateModalFormComponent,
    TodosUpdateModalFormComponent,
    TodosDeleteModalFormComponent,
    TodosCreateModalFormComponent
  ]
})
export class AppModule { }
