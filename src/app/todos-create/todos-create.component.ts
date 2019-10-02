import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-todos-create",
  templateUrl: "./todos-create.component.html",
  styleUrls: ["./todos-create.component.scss"]
})
export class TodosCreateComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit() {}
  onCancel() {
    this.router.navigateByUrl('todos');
  }
}
