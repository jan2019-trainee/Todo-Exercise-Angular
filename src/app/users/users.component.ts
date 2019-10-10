import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../service/toast.service";
import { UserUpdateComponent } from "./user-update/user-update.component";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { UsersService } from "./users.service";
import { UsersDeleteModalFormComponent } from "./users-delete-modal-form/users-delete-modal-form.component";
import { UsersCreateModalFormComponent } from "./users-create-modal-form/users-create-modal-form.component";
import { Users } from "./models/users";
import { Page } from "./models/page";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  userData: Users[];
  filteredData: Users[];

  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number;
  searchText?: string;

  constructor(
    private usersService: UsersService,
    private modalService: NgbModal,
    public toastService: ToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.currentPage = this.activatedRoute.snapshot.queryParamMap.has("page")
      ? parseInt(this.activatedRoute.snapshot.queryParamMap.get("page"))
      : this.currentPage;
    this.itemsPerPage = this.activatedRoute.snapshot.queryParamMap.has("size")
      ? parseInt(this.activatedRoute.snapshot.queryParamMap.get("size"))
      : this.itemsPerPage;
    this.searchText = this.activatedRoute.snapshot.queryParamMap.has(
      "searchText"
    )
      ? this.activatedRoute.snapshot.queryParamMap.get("searchText")
      : "";

    this.getUsers();
  }

  getUsers() {
    // this.userData = this.usersService.getUserData1(
    //   this.currentPage,
    //   this.itemsPerPage
    // );
    //  this.filteredData = this.userData;

    // this.totalItems = this.usersService.getUserData().length;

    this.getNavigate();
    this.usersService
      .getAllUsers(this.currentPage, this.itemsPerPage, this.searchText)
      .subscribe((result: Page<Users>) => {
        const searchText = this.searchText.toLocaleLowerCase();
        this.totalItems = result.totalElements;
        this.filteredData = result.content.filter(user => {
          return (
            user.first_name.toLowerCase().includes(searchText) ||
            user.last_name.toLowerCase().includes(searchText) ||
            user.occupation.toLowerCase().includes(searchText)
          );
        });
      });
  }
  getNavigate() {
    this.router.navigate(["/users"], {
      queryParams: {
        page: this.currentPage,
        size: this.itemsPerPage,
        searchText: this.searchText
      }
    });
  }
  onSearch() {
    this.getUsers();
  }

  openDeleteModal(user) {
    const modalRef = this.modalService.open(UsersDeleteModalFormComponent, {
      size: "sm"
    });
    modalRef.componentInstance.user = user;

    modalRef.result
      .then(result => {
        this.usersService.deleteUserById(result.id).subscribe(
          data => {
            console.log("DELETE Request is successful");
            this.getUsers();
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
        this.showError("Something error");
      });
  }

  openUpdateModal(user) {
    const modalRef = this.modalService.open(UserUpdateComponent, {
      size: "lg"
    });
    modalRef.componentInstance.user = user;

    modalRef.result
      .then(result => {
        this.usersService.createUsers(result).subscribe(
          data => {
            console.log("PUT Request is successful");
            this.getUsers();
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
        this.showError("Something error");
      });
  }

  openCreateModal() {
    const modalRef = this.modalService.open(UsersCreateModalFormComponent, {
      size: "lg"
    });

    modalRef.result
      .then(result => {
        this.usersService.createUsers(result).subscribe(
          () => {
            console.log("POST Request is successful");
            this.getUsers();
            this.showSuccess("POST Request is successful");
          },
          error => {
            console.log("Error", error);
            this.showError("POST Request is not successful");
          }
        );
      })
      .catch(error => {
        console.log(error);
        this.showError("Something error");
      });
  }

  pageChanged(event) {
    this.currentPage = event;
    this.getUsers();
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
