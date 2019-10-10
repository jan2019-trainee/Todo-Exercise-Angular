import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UsersService } from "../users.service";
import { Users } from "../models/users";

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
   userProfilePicture: string;

  index: Users;

  constructor(
    public activeModal: NgbActiveModal,
    private usersService: UsersService // private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    const params = {
      id: this.user.id,
      first_name: this.userFirstName,
      last_name: this.userLastName,
      occupation: this.userOccupation,
      profile_picture: this.userProfilePicture
    };

    this.activeModal.close(params);
  }

  ngOnInit() {
    this.userId = this.user.id;
    this.userFirstName = this.user.first_name;
    this.userLastName = this.user.last_name;
    this.userOccupation = this.user.occupation;
    this.userProfilePicture = this.user.profile_picture;
  }
}
