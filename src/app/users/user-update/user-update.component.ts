import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/service/toast.service";
import { UsersService } from "../users.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
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

  index;

  constructor(
    public activeModal: NgbActiveModal,
    public toastService: ToastService,
    private usersService: UsersService
  ) // private formBuilder: FormBuilder
  {}

  onSubmit() {
    // console.log(this.index);
    const userData = this.usersService.getUserData();
     const updateTodo = userData.find(this.findIndexToUpdate, this.user.id);

    console.log(this.user.id);

    let index = userData.indexOf(this.index);
    this.usersService.getUserData()[index] = this.user;
    this.showSuccess();

    
  // console.log(this.index);
  // console.log(this.usersService.getUserData().find(this.findIndexToUpdate,this.user.id));

  }

  ngOnInit() {
    this.index = this.usersService
      .getUserData()
      .find(this.findIndexToUpdate, this.user.id);
    
  }

  closeModal() {
    this.activeModal.close("Modal Closed");
  }

  showStandard() {
    this.toastService.show("I am a standard toast", {
      delay: 2000,
      autohide: true
    });
  }

  showSuccess() {
    this.toastService.show("Successfully Updated", {
      classname: "bg-success text-light",
      delay: 5000,
      autohide: true,
      headertext: "UPDATE"
    });
  }
  showError() {
    this.toastService.show("Data Not Saved!", {
      classname: "bg-danger text-light",
      delay: 5000,
      autohide: true,
      headertext: "Error!!!"
    });
  }

  showCustomToast(customTpl) {
    this.toastService.show(customTpl, {
      classname: "bg-info text-light",
      delay: 5000,
      autohide: true
    });
  }

  updateUser() {
    const userData = this.usersService.getUserData();
    // const updateTodo = userData.find(this.findIndexToUpdate, user.id);

    console.log(this.user.id);

    let index = userData.indexOf(this.index);
    userData[index] = this.user;
    this.showSuccess();

    if (this.user.indexOf(index) === index) {
      this.showError();
    } else {
      this.showSuccess();
    }
  }
  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }
}
