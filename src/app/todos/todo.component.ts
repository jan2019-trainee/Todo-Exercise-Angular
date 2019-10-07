import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../service/toast.service";
import { TodosCreateModalFormComponent } from './todos-create-modal-form/todos-create-modal-form.component';
import { TodosUpdateModalFormComponent } from './todos-update-modal-form/todos-update-modal-form.component';
import { TodosDeleteModalFormComponent } from './todos-delete-modal-form/todos-delete-modal-form.component';

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public toastService: ToastService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.filteredTodo = this.todoData;
  }

  ngOnInit() {
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

  searchText: string;
  filteredTodo: any[];

  todoData = [
    {
      id: "1",
      name: "Conquest",
      description: "Conquer Russia",
      status: "Unfinished",
      owner: "Ayo",
      ownerId: "1"
    },
    {
      id: "2",
      name: "Paint Project",
      description: "Copy Monalisa",
      status: "Finished",
      ownerId: "2",
      owner: "Sam"
    },
    {
      id: "3",
      name: "Sweep",
      description: "Clean the windows",
      status: "Finished",
      ownerId: "3",
      owner: "Andrey"
    },
    {
      id: "4",
      name: "War",
      description: "Defeat Ribuko",
      status: "Unfinished",
      ownerId: "4",
      owner: "Minamoto"
    },
    {
      id: "5",
      name: "Order",
      description: "Community Service",
      status: "Unfinished",
      ownerId: "5",
      owner: "Eric"
    },
    {
      id: "6",
      name: "Journal",
      description: "Create new Journal",
      status: "Finished",
      ownerId: "6",
      owner: "John"
    },
    {
      id: "7",
      name: "Choreography",
      description: "Copy MJ steps",
      status: "Unfinished",
      ownerId: "7",
      owner: "Muzan"
    },
    {
      id: "8",
      name: "Build",
      description: "Build the 4th Bridge",
      status: "Unfinished",
      ownerId: "8",
      owner: "Bob"
    },
    {
      id: "9",
      name: "PE",
      description: "Play soccer",
      status: "Unfinished",
      ownerId: "9",
      owner: "Bezel"
    },
    {
      id: "10",
      name: "Activity",
      description: "Join soccer game",
      status: "Finished",
      ownerId: "10",
      owner: "Sena"
    },
    {
      id: "11",
      name: "Activity",
      description: "Join soccer Tennis",
      status: "UnFinished",
      ownerId: "10",
      owner: "Sena"
    }
  ];

  onSearch() {
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
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
  openDeleteModal(todo) {
    const modalRef = this.modalService.open(TodosDeleteModalFormComponent, { size: "sm" });
     modalRef.componentInstance.user = todo;

    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
  openCreateModal() {
    const modalRef = this.modalService.open(TodosCreateModalFormComponent, { size: "lg" });
     
    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
