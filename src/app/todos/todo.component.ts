import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../service/toast.service";
import { TodosCreateModalFormComponent } from "./todos-create-modal-form/todos-create-modal-form.component";
import { TodosUpdateModalFormComponent } from "./todos-update-modal-form/todos-update-modal-form.component";
import { TodosDeleteModalFormComponent } from "./todos-delete-modal-form/todos-delete-modal-form.component";
import { Todos } from "./models/todos";
import { TodoService } from "./todo.service";
import { Page } from "./models/page";
/**
 * To be continue:
 * todo naming must be same with BE
 * implements CRUD
 *
 */
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  todoData: Todos[];
  filteredTodo: any[];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number;
  searchText?: string;

  constructor(
    private modalService: NgbModal,
    public toastService: ToastService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todosService: TodoService
  ) {
    // this.filteredTodo = this.todoData;
  }

  ngOnInit() {
    this.getQueryParam();
    this.getTodos();
  }

  getTodos() {
    this.todosService
      .getAllTodos(this.currentPage, this.itemsPerPage, this.searchText)
      .subscribe((result: Page<Todos>) => {
        const searchText = this.searchText.toLocaleLowerCase();
        this.totalItems = result.totalElements;
        this.filteredTodo = result.content.filter((todo: Todos) => {
          return (
            todo.name.toLowerCase().includes(searchText) ||
            todo.description.toLowerCase().includes(searchText) ||
            todo.status.toLowerCase().includes(searchText) ||
            todo.owner.first_name.toLowerCase().includes(searchText) ||
            todo.owner.last_name.toLowerCase().includes(searchText)
          );
        });
      });
  }
  getQueryParam() {
    this.itemsPerPage =
      parseInt(this.activatedRoute.snapshot.queryParamMap.get("size")) || 10;
    this.currentPage =
      parseInt(this.activatedRoute.snapshot.queryParamMap.get("page")) || 1;
    this.searchText =
      this.activatedRoute.snapshot.queryParamMap.get("searchText") || "";

    this.getNavigate();
  }
  getNavigate() {
    this.router.navigate(["/todos"], {
      queryParams: {
        page: this.currentPage,
        size: this.itemsPerPage,
        searchText: this.searchText
      }
    });
  }

  onSearch() {
    this.getNavigate();
    this.getTodos();
  }

  openUpdateModal(todo) {
    const modalRef = this.modalService.open(TodosUpdateModalFormComponent, {
      size: "lg"
    });
    modalRef.componentInstance.todo = todo;

    modalRef.result
      .then(result => {
        this.todosService.createTodo(result).subscribe(
          data => {
            console.log("PUT Request is successful");
            this.getTodos();
            this.showSuccess("PUT Request is successful");
          },
          error => {
            console.log("Error", error);
            this.showError("PUT Request is not successful");
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
  openDeleteModal(todo) {
    const modalRef = this.modalService.open(TodosDeleteModalFormComponent, {
      size: "sm"
    });
    modalRef.componentInstance.todo = todo;

    modalRef.result
      .then(result => {
        this.todosService.deleteTodoById(result.id).subscribe(
          data => {
            console.log("DELETE Request is successful");
            this.getTodos();
            this.showSuccess("DELETE Request is successful");
          },
          error => {
            console.log("Error", error);
            this.showError("DELETE Request is not successful");
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
  openCreateModal() {
    const modalRef = this.modalService.open(TodosCreateModalFormComponent, {
      size: "lg"
    });

    modalRef.result
      .then(result => {
        this.todosService.createTodo(result).subscribe(
          () => {
            console.log("POST Request is successful");
            this.getTodos();
            this.showSuccess("POST Request is successful");
          },
          error => {
            console.log("Error", error);
            this.showError(
              "POST Request is not successful, owner id: " +
                result.owner.id +
                " did not exist"
            );
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
  pageChanged(event) {
    this.router.navigate(["/todos"], {
      queryParams: {
        page: event,
        size: this.itemsPerPage,
        searchText: this.searchText
      }
    });
    this.currentPage = event;

    this.getTodos();
  }

  showSuccess(message: string) {
    this.toastService.show(message, {
      classname: "bg-success text-light",
      delay: 5000,
      autohide: true
    });
  }
  showError(message: string) {
    this.toastService.show(message, {
      classname: "bg-danger text-light",
      delay: 5000,
      autohide: true
    });
  }
}
