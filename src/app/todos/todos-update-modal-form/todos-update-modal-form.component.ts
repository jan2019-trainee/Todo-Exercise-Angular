import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/service/toast.service";
import { Todos } from "../models/todos";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todos-update-modal-form",
  templateUrl: "./todos-update-modal-form.component.html",
  styleUrls: ["./todos-update-modal-form.component.scss"]
})
export class TodosUpdateModalFormComponent implements OnInit {
  @Input() public todo;
  modalTitle = "Todo Update";

  todoId: string;
  todoName: string;
  todoDescription: string;
  todoStatus: string;
  todoOwner: string;
  todoOwnerId: string;
  index: Todos;

  constructor(
    public activeModal: NgbActiveModal,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.index = this.todoService
      .getTodoData()
      .find(user => user.id === this.todo.id);

    this.todoId = this.todo.id;
    this.todoName = this.todo.name;
    this.todoDescription = this.todo.description;
    this.todoStatus = this.todo.status;
    this.todoOwner = this.todo.owner;
    this.todoOwnerId = this.todo.ownerId;
  }

  onSubmit() {
    const params: Todos = {
      id: this.todoId,
      name: this.todoName,
      description: this.todoDescription,
      status: this.todoStatus,
      owner: this.todoOwner,
      ownerId: this.todo.ownerId
    };

    const todoData = this.todoService.getTodoData();
    let index = todoData.indexOf(this.index);
    this.todoService.updateTodoData(index, params);
    this.closeModal();

  }

  closeModal() {
    this.activeModal.close("Modal Closed");
  }
}
