import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: "app-user-update",
  templateUrl: "./user-update.component.html",
  styleUrls: ["./user-update.component.scss"]
})
export class UserUpdateComponent implements OnInit {
  modalTitle = "User Update";
  constructor(
    public activeModal: NgbActiveModal,
    public toastService: ToastService
  ) {}

  ngOnInit() {
    console.log(this.user);
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

  @Input() public user;
}
