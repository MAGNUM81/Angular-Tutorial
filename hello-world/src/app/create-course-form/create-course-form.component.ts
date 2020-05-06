import { Component } from '@angular/core';

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

  submit(f)
  {
      console.log("submitted : ", f.form.value)
  }
}
