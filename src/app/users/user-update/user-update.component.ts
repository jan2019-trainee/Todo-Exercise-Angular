import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UsersService } from "../users.service";


@Component({
  selector: "app-user-update",
  templateUrl: "./user-update.component.html",
  styleUrls: ["./user-update.component.scss"]
})
export class UserUpdateComponent implements OnInit {
  @Input() public user;

  modalTitle = "User Update";
  newUser;

  userId: string;
  userFirstName: string;
  userLastName: string;
  userOccupation: string;
  // userProfilePicture: string;

  index;

  constructor(
    public activeModal: NgbActiveModal,
    private usersService: UsersService // private formBuilder: FormBuilder
  ) {}

  onSubmit() {
 
    const params = { 
      id: this.user.id,
      firstName : this.userFirstName,
      lastName : this.userLastName,
      occupation : this.userOccupation,
      profilePicture : this.user.profilePicture
     };

     const userData = this.usersService.getUserData();
     let indexfound = userData.indexOf(this.index);
     this.usersService.updateUserData(indexfound,params)
     
     this.closeModal();
  }

  ngOnInit() {
    this.index = this.usersService
      .getUserData()
      .find(this.findIndexToUpdate, this.user.id);

    this.userId = this.index.id;
    this.userFirstName = this.index.firstName;
    this.userLastName = this.index.lastName;
    this.userOccupation = this.index.occupation;

    console.log(this.index.id);
  }

  closeModal() {
    this.activeModal.close("Modal Closed");
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }
}
