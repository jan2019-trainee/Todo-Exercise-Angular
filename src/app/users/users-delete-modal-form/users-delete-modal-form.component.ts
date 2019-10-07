import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/service/toast.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-delete-modal-form',
  templateUrl: './users-delete-modal-form.component.html',
  styleUrls: ['./users-delete-modal-form.component.scss']
})
export class UsersDeleteModalFormComponent implements OnInit {

  modalTitle = "Delete";
  

  @Input() public user;
   
  constructor(
    public activeModal: NgbActiveModal,
    public toastService: ToastService,
    private usersService: UsersService
  ) {}

  onDelete(){
    const index = this.usersService.getUserData().indexOf(this.user);
    if (index !== -1) {
        this.usersService.getUserData().splice(index, 1);
    }        
  }

  ngOnInit() {}

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
    this.toastService.show("I am a success toast", {
      classname: "bg-success text-light",
      delay: 5000,
      autohide: true,
      headertext: "Toast Header"
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

}
