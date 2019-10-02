import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todos/todo.module';
import { UsersCreateModule } from './users-create/users-create.module';
import { TodosCreateModule } from './todos-create/todos-create.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    UsersCreateModule,
    TodoModule,
    TodosCreateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
