import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/service/toast.service";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users-delete-modal-form",
  templateUrl: "./users-delete-modal-form.component.html",
  styleUrls: ["./users-delete-modal-form.component.scss"]
})
export class UsersDeleteModalFormComponent implements OnInit {
  modalTitle = "Delete";

  @Input() public user;

  constructor(
    public activeModal: NgbActiveModal,
    private usersService: UsersService
  ) {}

  onDelete() {
    this.activeModal.close(this.user);
  }

  ngOnInit() {}
}
