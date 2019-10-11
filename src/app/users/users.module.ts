import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserUpdateComponent } from "./user-update/user-update.component";

import { UsersRoutingModule } from "./users.routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UsersCreateModalFormComponent } from './users-create-modal-form/users-create-modal-form.component';
import { UsersDeleteModalFormComponent } from './users-delete-modal-form/users-delete-modal-form.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserUpdateComponent,
    UsersCreateModalFormComponent,
    UsersDeleteModalFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UsersRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    UserUpdateComponent,
    UsersDeleteModalFormComponent,
    UsersCreateModalFormComponent
  ]
})
export class UsersModule {}
