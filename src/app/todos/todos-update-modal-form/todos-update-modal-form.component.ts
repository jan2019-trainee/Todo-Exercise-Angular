import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Page } from 'src/app/users/models/page';
import { Users } from 'src/app/users/models/users';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: "app-todos-update-modal-form",
  templateUrl: "./todos-update-modal-form.component.html",
  styleUrls: ["./todos-update-modal-form.component.scss"]
})
export class TodosUpdateModalFormComponent implements OnInit {
  @Input() public todo;
  modalTitle = "Todo Update";

  userData: Users[];
  todoUpdateForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.userService
    .getAllUsers(1, 5)
    .subscribe((data: Page<Users>) => {
      this.userData = data.content;
     console.log(this.userData);
    });

    this.todoUpdateForm = this.formBuilder.group({
      'todoId': [this.todo.id],
      'name': [this.todo.name,[Validators.required, Validators.maxLength(100)]],
      'description': [this.todo.description,[Validators.required]],
      'status': [this.todo.status,[Validators.required]],
      'owner_id': [this.todo.owner.id,[Validators.required]],
    });
  }

  onSubmit() {
    const params = {
      id: this.todoUpdateForm.value.todoId,
      name: this.todoUpdateForm.value.name,
      description: this.todoUpdateForm.value.description,
      status: this.todoUpdateForm.value.status,
      owner: {
        id: this.todoUpdateForm.value.owner_id,
        first_name: null,
        last_name: null,
        occupation: null,
        profile_picture: null
      }
    };
    this.activeModal.close(params);
  }
}
