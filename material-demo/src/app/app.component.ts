import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditCourseComponent} from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {data: {
        courseId: 1
      }
    }).afterClosed().subscribe(result => console.log(result));
  }
}
