import { Injectable } from "@angular/core";
import { Users } from "./models/users";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Page } from "./models/page";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  API_URL = `${environment.apiUrl}users`;

  constructor(private http: HttpClient) {}

  // API: GET /users
  public getAllUsers(
    page: number,
    size: number,
    searchText?: string
  ): Observable<Page<Users>> {
    let params = new HttpParams()
      .set("page", (--page).toString())
      .set("size", size.toString())
      .set("searchText", searchText);

    return this.http.get<Page<Users>>(`${this.API_URL}`, { params });
  }

  // API: POST /users
  public createUsers(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.API_URL}`, user ); 
  }

  // API: GET /users/:id
  public getUsersById(userId: number): Observable<Users> {
    return this.http.get<Users>(`${this.API_URL}/${userId}`);
  }

  // API: PUT /users/:id
  public updateUsers(user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.API_URL}/${user.users_id}`,user);
  }

  // DELETE /users/:id
  public deleteUserById(userId: number): Observable<Users> {
    return this.http.delete<Users>(`${this.API_URL}/${userId}`);
  }

}
