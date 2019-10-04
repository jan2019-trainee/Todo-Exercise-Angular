import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './users-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersDetailsModule { }
