import { Injectable } from "@angular/core";
import { Todos } from "./models/todos";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { Page } from "./models/page";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}
  API_URL = `${environment.apiUrl}todos`;

 
  // API: GET /todos
  public getAllTodos(
    page: number,
    size: number,
    searchText?: string
  ): Observable<Page<Todos>> {
    let params = new HttpParams()
      .set("page", (--page).toString())
      .set("size", size.toString())
      .set("searchText", searchText);
      
    return this.http.get<Page<Todos>>(`${this.API_URL}`, { params });
  }

  // API: POST /todos
  public createTodo(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(`${this.API_URL}`, todo);
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todos>  {
    return this.http.get<Todos>(`${this.API_URL}/${todoId}`);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todos): Observable<Todos>  {
    return this.http.put<Todos>(`${this.API_URL}/${todo.id}`,todo);
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number): Observable<Todos>  {
    return this.http.delete<Todos>(`${this.API_URL}/${todoId}`);
  }
}
