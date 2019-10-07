import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-todos-delete-modal-form',
  templateUrl: './todos-delete-modal-form.component.html',
  styleUrls: ['./todos-delete-modal-form.component.scss']
})
export class TodosDeleteModalFormComponent implements OnInit {
  modalTitle = "Todo Create";
  constructor(
    public activeModal: NgbActiveModal,
    public toastService: ToastService
  ) {}

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
