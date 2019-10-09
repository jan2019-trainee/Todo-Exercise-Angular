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

  todoData = [
    {
      id: "1",
      name: "Conquest",
      description: "Conquer Russia",
      status: "Unfinished",
      owner: "Ayo",
      ownerId: "1"
    },
    {
      id: "2",
      name: "Paint Project",
      description: "Copy Monalisa",
      status: "Finished",
      ownerId: "2",
      owner: "Sam"
    },
    {
      id: "3",
      name: "Sweep",
      description: "Clean the windows",
      status: "Finished",
      ownerId: "3",
      owner: "Andrey"
    },
    {
      id: "4",
      name: "War",
      description: "Defeat Ribuko",
      status: "Unfinished",
      ownerId: "4",
      owner: "Minamoto"
    },
    {
      id: "5",
      name: "Order",
      description: "Community Service",
      status: "Unfinished",
      ownerId: "5",
      owner: "Eric"
    },
    {
      id: "6",
      name: "Journal",
      description: "Create new Journal",
      status: "Finished",
      ownerId: "6",
      owner: "John"
    },
    {
      id: "7",
      name: "Choreography",
      description: "Copy MJ steps",
      status: "Unfinished",
      ownerId: "7",
      owner: "Muzan"
    },
    {
      id: "8",
      name: "Build",
      description: "Build the 4th Bridge",
      status: "Unfinished",
      ownerId: "8",
      owner: "Bob"
    },
    {
      id: "9",
      name: "PE",
      description: "Play soccer",
      status: "Unfinished",
      ownerId: "9",
      owner: "Bezel"
    },
    {
      id: "10",
      name: "Activity",
      description: "Join soccer game",
      status: "Finished",
      ownerId: "10",
      owner: "Sena"
    },
    {
      id: "11",
      name: "Activity",
      description: "Join soccer Tennis",
      status: "UnFinished",
      ownerId: "10",
      owner: "Sena"
    }
  ];

  // getTodoLoadData(page: number, pageSize: number): Todos[] {
  //   --page;
  //   return this.todoData.slice(page * pageSize, (page + 1) * pageSize);
  // }
  // getTodoData(): Todos[] {
  //   return this.todoData;
  // }

  // updateTodoData(index: number, user: Todos) {
  //   this.getTodoData().splice(index, 1, user);
  // }

  // createTodoData(todo: Todos) {
  //   this.getTodoData().push(todo);
  // }
  // deleteTodoData(index: number) {
  //   this.getTodoData().splice(index, 1);
  // }

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
