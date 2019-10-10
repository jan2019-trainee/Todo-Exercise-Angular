import { Directive, Input } from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormControl
} from "@angular/forms";

@Directive({
  selector: "[appUrlCheker]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: UrlChekerDirective, multi: true }
  ]
})
export class UrlChekerDirective{
  
  constructor() {
   
  }
  static urlChecking(control: AbstractControl): ValidationErrors | null{
    if((control.value as string).indexOf(' ') >= 0){
      return { shouldNotHaveSpaces: true}
    }

    return null;
   }
  

  // validate(c: AbstractControl): {[key:string]: any} | null{
  //   return (c.value && c.value.length <= 2) ? {valid: true} : null;
  // }
  // UrlValidator(): AbstractControl {
  //   return (c: FormControl) => {
  //     if (
  //       ((c.value.startsWith("http://") || c.value.startsWith("https://")) &&
  //         c.value.endsWith(".png")) ||
  //       c.value.endsWith(".jpg")
  //     ) {
  //       return null;
  //     } else {
  //       return {
  //         emailvalidator: {
  //           valid: false
  //         }
  //       };
  //     }
  //   };
  // }
}

// if( (c.value.startsWith("http://") ||
//     (c.value.startsWith("https://"))) &&
//       ((c.value.endsWith(".png")) || (c.value.endsWith(".jpg"))) )
//     };

// validate(control: AbstractControl): { [key: string]: any } | null {
//   return this.URl.startsWith("http://") ||
//     (this.URl.startsWith("https://") &&
//       (this.URl.endsWith(".png") || this.URl.endsWith(".jpg")))
//     ? { appUrlCheker: true }
//     : null;
// }
