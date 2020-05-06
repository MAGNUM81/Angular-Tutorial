import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.css']
})
export class CreateCourseFormComponent {
  categories = [
    {id:"1", name:"Development"},
    {id:"2", name:"Arts"},
    {id:"3", name:"Languages"}
    ];

  submit(f: NgForm)
  {
      console.log("submitted : ", f)
  }
}
