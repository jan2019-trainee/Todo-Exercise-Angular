import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../service/toast.service";
import { TodosCreateModalFormComponent } from "./todos-create-modal-form/todos-create-modal-form.component";
import { TodosUpdateModalFormComponent } from "./todos-update-modal-form/todos-update-modal-form.component";
import { TodosDeleteModalFormComponent } from "./todos-delete-modal-form/todos-delete-modal-form.component";
import { Todos } from "./models/todos";
import { TodoService } from "./todo.service";

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
     this.filteredTodo = this.todoData;
  }

  ngOnInit() {
    this.getQueryParam();
    this.getTodos();

    // GET USER IF FROM URL
    this.activatedRoute.paramMap.subscribe(
      //Callback function
      (paramMap: ParamMap) => {
        const userId = paramMap.get("userId");
        if (userId) {
          console.log(userId);
          this.filteredTodo = this.todoData.filter(todo => {
            return todo.ownerId.toLowerCase() === userId;
          });
        } else {
          this.filteredTodo = this.todoData;
        }
      }
    );
  }

  getTodos() {
    this.todoData = this.todosService.getTodoLoadData(
      this.currentPage,
      this.itemsPerPage
    );
    this.filteredTodo = this.todoData;
    this.totalItems = this.todosService.getTodoData().length;
    // this.todosService
    //   .getAllTodos(this.currentPage, this.itemsPerPage)
    //   .subscribe((result: Todos[])  => {
    //     this.filteredTodo = result;
    //   });
  }
  getQueryParam() {
    this.itemsPerPage =
      parseInt(this.activatedRoute.snapshot.queryParamMap.get("size")) || 10;
    this.currentPage =
      parseInt(this.activatedRoute.snapshot.queryParamMap.get("page")) || 1;
    this.searchText =
      this.activatedRoute.snapshot.queryParamMap.get("searchText") || null;

    this.router.navigate(["/todos"], {
      queryParams: {
        page: this.currentPage,
        size: this.itemsPerPage,
        searchText: this.searchText
      }
    });
  }

  onSearch() {
    this.router.navigate(["/todos"], {
      queryParams: {
        page: this.currentPage,
        size: this.itemsPerPage,
        searchText: this.searchText
      }
    });
    const searchText = this.searchText.toLocaleLowerCase();
    if (this.searchText) {
      this.filteredTodo = this.todoData.filter(todo => {
        return (
          todo.id.toLowerCase().includes(searchText) ||
          todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText) ||
          todo.status.toLowerCase().includes(searchText) ||
          todo.owner.toLowerCase().includes(searchText)
        );
      });
    } else {
      this.filteredTodo = this.todoData;
    }
  }

  openUpdateModal(todo) {
    const modalRef = this.modalService.open(TodosUpdateModalFormComponent, {
      size: "lg"
    });
    modalRef.componentInstance.todo = todo;

    modalRef.result
      .then(result => {
        this.getTodos();
        this.showSuccess();
        console.log(result);
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
        this.getTodos();
        this.showSuccess();
        console.log(result);
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
        this.getTodos();
        this.showSuccess();
        console.log(result);
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

  showSuccess() {
    this.toastService.show("Success!", {
      classname: "bg-success text-light",
      delay: 5000,
      autohide: true
    });
  }
  showError() {
    this.toastService.show("Data Not Saved!", {
      classname: "bg-danger text-light",
      delay: 5000,
      autohide: true
    });
  }
}
