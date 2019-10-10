import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/service/toast.service";
import { TodoService } from "../todo.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

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

  todoCreateForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
   
  }
 
  ngOnInit() {
    this.todoCreateForm = this.formBuilder.group({
      'name': ['',[Validators.required, Validators.maxLength(100)]],
      'description': ['',[Validators.required]],
      'status': ['',[Validators.required]],
      'owner_id': ['',[Validators.required]],
    });
  }

  onSubmit() {
    const params = {
      id: '',
      name: this.todoCreateForm.value.name,
      description: this.todoCreateForm.value.description,
      status: this.todoCreateForm.value.status,
      owner: {
        id: this.todoCreateForm.value.owner_id,
        first_name: null,
        last_name: null,
        occupation: null,
        profile_picture: null
      }
    };
    this.activeModal.close(params);

  }
}
