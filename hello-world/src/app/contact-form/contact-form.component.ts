import { Component } from '@angular/core';
import {NgModel, NgForm} from "@angular/forms";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {id:1, name:"email"},
    {id:2, name:"phone"},
    {id:3, name:"pidgeon"}
  ];
  constructor() { }

  log(firstName: NgModel)
  {
    console.log(firstName)
  }

  submit(f: NgForm)
  {
    console.log(f)
  }
}
