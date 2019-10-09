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

  userData = [
    {
      id: "1",
      first_name: "Ayo",
      last_name: "Ogunsoundie",
      occupation: "General",
      profile_picture:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "2",
      first_name: "Sam",
      last_name: "Burriss",
      occupation: "Painter",
      profile_picture:
        "https://images.unsplash.com/photo-1506468203959-a06c860af8f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "3",
      first_name: "Andrey",
      last_name: "Martel",
      occupation: "Laborer",
      profile_picture:
        "https://images.unsplash.com/photo-1543762446-67600aab041f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "4",
      first_name: "Minamonoto",
      last_name: "Yaiba",
      occupation: "Shugon",
      profile_picture:
        "https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "5",
      first_name: "Eric",
      last_name: "Mclean",
      occupation: "Soldier",
      profile_picture:
        "https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "6",
      first_name: "John",
      last_name: "Doe",
      occupation: "Journalist",
      profile_picture:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "7",
      first_name: "Muzan",
      last_name: "Lih",
      occupation: "Dancer",
      profile_picture:
        "https://images.unsplash.com/photo-1542131597-a4390333d136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "8",
      first_name: "Bob",
      last_name: "Reck",
      occupation: "Builder",
      profile_picture:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "9",
      first_name: "Bezel",
      last_name: "Bub",
      occupation: "Teacher",
      profile_picture:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "10",
      first_name: "Sena",
      last_name: "IV",
      occupation: "Player",
      profile_picture:
        "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ];

  constructor(private http: HttpClient) {}

  // getUserData1(page: number, pageSize: number): Users[] {
  //   --page;
  //   return this.userData.slice(page * pageSize, (page + 1) * pageSize);
  // }
  // getUserData(): Users[] {
  //   return this.userData;
  // }

  // updateUserData(index: number, user: Users) {
  //   this.getUserData().splice(index, 1, user);
  // }

  // createUserData(user: Users) {
  //   this.getUserData().push(user);
  // }

  // deleteUserData(index: number) {
  //   this.getUserData().splice(index, 1);
  // }


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
