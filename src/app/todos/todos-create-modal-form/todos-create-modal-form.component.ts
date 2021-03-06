import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/service/toast.service";
import { TodoService } from '../todo.service';

@Component({
  selector: "app-todos-create-modal-form",
  templateUrl: "./todos-create-modal-form.component.html",
  styleUrls: ["./todos-create-modal-form.component.scss"]
})
export class TodosCreateModalFormComponent implements OnInit {
  modalTitle = "Todo Create";

  todoId: string;
  todoName: string;
  todoDescription: string;
  todoStatus: string;
  todoOwner: string;
  todoOwnerId: string;

  constructor(
    public activeModal: NgbActiveModal,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.todoId = Math.max.apply(Math, this.todoService.getTodoData().map(todo => { return todo.id; })) + 1;
  }

  onSubmit(){
    const params = { 
      id: this.todoId,
      name: this.todoName,
      description: this.todoDescription,
      status: this.todoStatus,
      owner: this.todoOwner,
      ownerId: null
     };
     this.todoService.createTodoData(params);
     
    this.activeModal.close();
  }


  closeModal() {
    this.activeModal.close("Modal Closed");
  }

}
