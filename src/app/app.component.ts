import { Component, TemplateRef } from "@angular/core";
import { ToastService } from './service/toast.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  
  title = "my-app";

   constructor(public toastService: ToastService) {}
   

  
}
