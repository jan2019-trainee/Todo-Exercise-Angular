import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserUpdateComponent } from './user-update/user-update.component';

import { UsersRoutingModule } from './users.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [UsersComponent, UserUpdateComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UsersRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
