import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todos/todo.module';
import { TodosCreateModule } from './todos-create/todos-create.module';
import { UsersDetailsModule } from './users-details/users-details.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    UsersDetailsModule,
    TodoModule,
    TodosCreateModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    UserUpdateComponent,
    UserDeleteComponent
  ]
})
export class AppModule { }
