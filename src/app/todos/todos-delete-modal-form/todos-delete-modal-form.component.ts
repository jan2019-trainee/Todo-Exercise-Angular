import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todos-delete-modal-form",
  templateUrl: "./todos-delete-modal-form.component.html",
  styleUrls: ["./todos-delete-modal-form.component.scss"]
})
export class TodosDeleteModalFormComponent implements OnInit {
  modalTitle = "Todo Create";
  @Input() public todo;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  onDelete() {
    this.activeModal.close(this.todo);
  }
}
