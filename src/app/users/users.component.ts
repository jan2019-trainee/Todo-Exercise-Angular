import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../service/toast.service";
import { UserUpdateComponent } from "./user-update/user-update.component";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { UsersService } from "./users.service";
import { UsersDeleteModalFormComponent } from "./users-delete-modal-form/users-delete-modal-form.component";
import { UsersCreateModalFormComponent } from "./users-create-modal-form/users-create-modal-form.component";


@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  

  userData: any[];
  filteredData: any[];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number;
  searchText: string;

  constructor(
    private usersService: UsersService,
    private modalService: NgbModal,
    public toastService: ToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    
  }

  ngOnInit() {
    this.getUsers();

    this.currentPage = this.activatedRoute.snapshot.queryParamMap.has("page")
      ? parseInt(this.activatedRoute.snapshot.queryParamMap.get("page"))
      : 1;
    this.itemsPerPage = this.activatedRoute.snapshot.queryParamMap.has("size")
      ? parseInt(this.activatedRoute.snapshot.queryParamMap.get("size"))
      : 10;
    this.searchText = this.activatedRoute.snapshot.queryParamMap.has(
      "searchText"
    )
      ? this.activatedRoute.snapshot.queryParamMap.get("searchText")
      : null;

    this.router.navigate(["/users"], {
      queryParams: {
        page: this.currentPage,
        size: this.itemsPerPage,
        searchText: this.searchText
      }
    });
  }

  getUsers() {
    this.userData = this.usersService.getUserData1(
      this.currentPage,
      this.itemsPerPage
    );
     this.filteredData = this.userData;
    
    this.totalItems = this.usersService.getUserData().length;
  }

  // getUserObs(){
  //   this.usersService.getUserObs().subscribe(response => {
  //     this.filteredData = response.map(item => {
  //       return(
  //         item.id,
  //         item.firstName,
  //         item.lastName,
  //         item.occupation,
  //         item.profilePicture
  //       );
  //     });
  //   });
  // }

  onSearch() {
    this.router.navigate(["/users"], {
      queryParams: {
        page: this.currentPage,
        size: this.itemsPerPage,
        searchText: this.searchText
      }
    });

    const searchText = this.searchText.toLocaleLowerCase();
    if (this.searchText) {
      this.filteredData = this.userData.filter(user => {
        return (
          user.firstName.toLowerCase().includes(searchText) ||
          user.lastName.toLowerCase().includes(searchText) ||
          user.occupation.toLowerCase().includes(searchText)
        );
      });
    } else {
      this.filteredData = this.userData;
    }
  }

  openDeleteModal(user) {
    const modalRef = this.modalService.open(UsersDeleteModalFormComponent, {
      size: "sm"
    });
    modalRef.componentInstance.user = user;

    modalRef.result
      .then(result => {
        this.getUsers();
        this.showSuccess();
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

    console.log(user);
  }

  openUpdateModal(user) {
    const modalRef = this.modalService.open(UserUpdateComponent, {
      size: "lg"
    });
    modalRef.componentInstance.user = user; 

    modalRef.result
      .then(result => {
        this.getUsers();
        this.showSuccess();
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  openCreateModal() {
    const modalRef = this.modalService.open(UsersCreateModalFormComponent, {
      size: "lg"
    });

    modalRef.result
      .then(result => {
        this.getUsers();
        this.showSuccess();
      })
      .catch(error => {
        console.log(error);
      });
  }

  pageChanged(event) {
    this.router.navigate(["/users"], {
      queryParams: {
        page: event,
        size: this.itemsPerPage,
        searchText: this.searchText
      }
    });
    this.currentPage = event;

    this.getUsers();
  }

  showSuccess() {
    this.toastService.show("Success!", {
      classname: "bg-success text-light",
      delay: 5000,
      autohide: true,
      
    });
  }
  showError() {
    this.toastService.show("Data Not Saved!", {
      classname: "bg-danger text-light",
      delay: 5000,
      autohide: true,
    });
  }

}
