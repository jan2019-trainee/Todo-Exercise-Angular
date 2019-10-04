import { Component, OnInit, Input } from "@angular/core";
import { ToastService } from "src/app/service/toast.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-user-delete",
  templateUrl: "./user-delete.component.html",
  styleUrls: ["./user-delete.component.scss"]
})
export class UserDeleteComponent implements OnInit {
  modalTitle = "User Delete";
  @Input() public user;
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
