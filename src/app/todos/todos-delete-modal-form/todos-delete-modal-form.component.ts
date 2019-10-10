import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/service/toast.service";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todos-delete-modal-form",
  templateUrl: "./todos-delete-modal-form.component.html",
  styleUrls: ["./todos-delete-modal-form.component.scss"]
})
export class TodosDeleteModalFormComponent implements OnInit {
  modalTitle = "Todo Create";
  @Input() public todo;

  index;
  constructor(
    public activeModal: NgbActiveModal,
    private todoService: TodoService
  ) {}

  ngOnInit() {}

  onDelete() {
    this.activeModal.close(this.todo);
  }
}
