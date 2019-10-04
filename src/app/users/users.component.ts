import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../service/toast.service";
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UsersService } from './users.service';
import { Users } from './models/users';
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  
  itemsPerPage: number=10;
  totalItems: any;
  page: any;
  previousPage: any;

  userData: any[];
  searchText: string;

  filteredData: any[];


  constructor(
    private usersService: UsersService,
    private modalService: NgbModal,
    public toastService: ToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    
  }

  ngOnInit() {
    this.getHeroes();
    this.router.navigate(['/users'],{queryParams:  { page: this.page }});
    this.page = this.activatedRoute.snapshot.queryParamMap.get("page");
     
  }

  getHeroes(){
    this.userData = this.usersService.getUserData();
    this.filteredData = this.userData;
    console.log(this.usersService.getUserData());
  }

 
  onSearch() {
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

  

  onDelete() {}

  openUpdateModal(user) {
    
    
    const modalRef = this.modalService.open(UserUpdateComponent, { size: "lg" });
     modalRef.componentInstance.user = user; // should be the object
    
    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });


      
  }
  onUpdate(user) {}

  openDeleteModal(user) {
    const modalDeleteRef = this.modalService.open(UserDeleteComponent, { size: "sm" });
    modalDeleteRef.componentInstance.user = user;

    modalDeleteRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  pageChanged(event){
    this.router.navigate(['/users'],{queryParams:  { page: event }});
    this.page = event;
}
}
