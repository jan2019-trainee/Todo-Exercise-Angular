import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  onCancel() {
    this.router.navigateByUrl('users');
  }
}
