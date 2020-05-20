import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any;
  title: string;

  constructor(coursesService: CoursesService) {
    this.title = "List of Courses";
      this.courses = coursesService.getCourses();
      console.log(this.courses)
  }

  ngOnInit(): void {
  }

}
