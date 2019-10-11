import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";
import { Users } from "src/app/users/models/users";
import { UsersService } from "src/app/users/users.service";
import { Page } from "../models/page";
import { Todo } from '../models/todo.enum';

declare const $: any;

@Component({
  selector: "app-todos-create-modal-form",
  templateUrl: "./todos-create-modal-form.component.html",
  styleUrls: ["./todos-create-modal-form.component.scss"]
})
export class TodosCreateModalFormComponent implements OnInit {
  modalTitle = "Todo Create";

  todoOwnerId: string;
  userData: Users[];
  status: Todo;

  @Input() usersList: Users[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}

  todoCreateForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.maxLength(100)]],
    description: ["", [Validators.required]],
    status: ["", [Validators.required]],
    owner_id: ["", [Validators.required]]
  });

  ngOnInit() {
    this.userService.getAllUsers(1, 5).subscribe((data: Page<Users>) => {
      this.userData = data.content;
      console.log(this.userData);
    });

    $(function() {
      $(".selectpicker").selectpicker();
    });
  }

  onSubmit() {
    const params = {
      id: "",
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
