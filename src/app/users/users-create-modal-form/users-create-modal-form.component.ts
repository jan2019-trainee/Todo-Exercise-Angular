import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users-create-modal-form",
  templateUrl: "./users-create-modal-form.component.html",
  styleUrls: ["./users-create-modal-form.component.scss"]
})
export class UsersCreateModalFormComponent implements OnInit {
  modalTitle = "User Create";

  userFirstName: string = "";
  userLastName: string = "";
  userOccupation: string = "";
  userProfilePicture: string = "";

  constructor(
    public activeModal: NgbActiveModal,
    private usersService: UsersService
  ) {}

  ngOnInit() {}
  onSubmit() {
    const params = {
      users_id: '',
      first_name: this.userFirstName,
      last_name: this.userLastName,
      occupation: this.userOccupation,
      profile_picture: this.userProfilePicture
    };

    this.activeModal.close(params);
  }

  closeModal() {
    this.activeModal.close();
  }
}
