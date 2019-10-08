import { Injectable } from "@angular/core";
import { Users } from "./models/users";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  userData = [
    {
      id: "1",
      firstName: "Ayo",
      lastName: "Ogunsoundie",
      occupation: "General",
      profilePicture:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "2",
      firstName: "Sam",
      lastName: "Burriss",
      occupation: "Painter",
      profilePicture:
        "https://images.unsplash.com/photo-1506468203959-a06c860af8f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "3",
      firstName: "Andrey",
      lastName: "Martel",
      occupation: "Laborer",
      profilePicture:
        "https://images.unsplash.com/photo-1543762446-67600aab041f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "4",
      firstName: "Minamonoto",
      lastName: "Yaiba",
      occupation: "Shugon",
      profilePicture:
        "https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "5",
      firstName: "Eric",
      lastName: "Mclean",
      occupation: "Soldier",
      profilePicture:
        "https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "6",
      firstName: "John",
      lastName: "Doe",
      occupation: "Journalist",
      profilePicture:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "7",
      firstName: "Muzan",
      lastName: "Lih",
      occupation: "Dancer",
      profilePicture:
        "https://images.unsplash.com/photo-1542131597-a4390333d136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "8",
      firstName: "Bob",
      lastName: "Reck",
      occupation: "Builder",
      profilePicture:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "9",
      firstName: "Bezel",
      lastName: "Bub",
      occupation: "Teacher",
      profilePicture:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "10",
      firstName: "Sena",
      lastName: "IV",
      occupation: "Player",
      profilePicture:
        "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ];

  constructor() {}

  getUserData1(page: number, pageSize: number): Users[] {
    --page;
    return this.userData.slice(page * pageSize, (page + 1) * pageSize);
  }
  getUserData(): Users[] {
    
    return this.userData;
  }

  updateUserData(index: number, user: Users) {
     this.getUserData().splice(index, 1, user);
  }

  createUserData(user: Users) {
     this.getUserData().push(user);
  }

  deleteUserData(index: number){
    this.getUserData().splice(index,1);
  }
}
