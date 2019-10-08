import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/service/toast.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-create-modal-form',
  templateUrl: './users-create-modal-form.component.html',
  styleUrls: ['./users-create-modal-form.component.scss']
})
export class UsersCreateModalFormComponent implements OnInit {
  modalTitle = "User Create";
  userId: string = '';
  userFirstName: string = '';
  userLastName: string = '';
  userOccupation: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private usersService: UsersService 
  ) {}


  ngOnInit() {
    this.userId = Math.max.apply(Math, this.usersService.getUserData().map(user => { return user.id; })) + 1;

  }
  onSubmit(){
    const params = { 
      id: this.userId,
      firstName : this.userFirstName,
      lastName : this.userLastName,
      occupation : this.userOccupation,
      profilePicture : ''
     };
     this.usersService.createUserData(params);
     
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close("Modal Closed");
  }

}
