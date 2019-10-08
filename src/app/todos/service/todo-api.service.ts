import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  API_URL = environment.apiUrl;

  constructor() { }

  // API: GET /todos
  public getAllTodos() {
    // will use this.http.get()
  }

  // API: POST /todos
  public createTodo(todo: Todos) {
    // will use this.http.post()
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    // will use this.http.get()
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todos) {
    // will use this.http.put()
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
  }
}
