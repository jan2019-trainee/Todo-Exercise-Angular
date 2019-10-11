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
import { UsersService } from '../users/users.service';
import { Users } from '../users/models/users';


@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  UsersData : Users[];
  todoData: Todos[];
  filteredTodo: Todos[];
  filteredTodoLength: number;

  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number;
  searchText?: string = "";

  constructor(
    private modalService: NgbModal,
    public toastService: ToastService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todosService: TodoService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const userId = paramMap.get("userId");
      console.log(userId);
      if (userId) {
        this.todosService
          .getAllTodos(this.currentPage, this.itemsPerPage, this.searchText)
          .subscribe((result: Page<Todos>) => {
            console.log(userId);
            const searchText = this.searchText.toLocaleLowerCase();
            this.totalItems = result.totalElements;

            this.filteredTodo = result.content.filter((todo: Todos) => {
              if (searchText) {
                console.log(searchText);
                return (
                  todo.owner.id == userId &&
                  (todo.name.toLowerCase().includes(searchText) ||
                    todo.description.toLowerCase().includes(searchText) ||
                    todo.status.toLowerCase().includes(searchText))
                );
              } else return todo.owner.id == userId;
            });
            this.filteredTodoLength = this.filteredTodo.length;
          });
      } else {
        this.getQueryParam();
        this.getTodos();
      }
    });


  }
  getUsers(){
    this.usersService
      .getAllUsers(this.currentPage, this.itemsPerPage, this.searchText)
      .subscribe((result: Page<Users>) => {
        const searchText = this.searchText.toLocaleLowerCase();
        this.totalItems = result.totalElements;

        this.UsersData = result.content.filter(user => {
          
          return (
            user.first_name.toLowerCase().includes(searchText) ||
            user.last_name.toLowerCase().includes(searchText) ||
            user.occupation.toLowerCase().includes(searchText)
          );
          
        });
       
      });
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

        this.filteredTodoLength = this.filteredTodo.length;
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
        console.log(result);
        this.todosService.updateTodo(result).subscribe(
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
    modalRef.componentInstance.usersList = this.UsersData;

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
