import { Component } from '@angular/core';
import {LikeChangedEventArgs} from "./like/like.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   courses;

  onAdd()
  {
      this.courses.push({id: 4, name: "course4"})
  }

  loadCourses() {
    // this makes Angular reconstruct the whole tree list everytime we call loadCourses
      this.courses = [
          {id: 1, name: "course1"},
          {id: 2, name: "course2"},
          {id: 3, name: "course3"}
      ];
  }

  onChange(course)
  {
    course.name = "Updated"
  }
}
