import { Component } from '@angular/core';
import {Observable, timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private courses: any;
  isLoading = false;

  constructor() {
    this.isLoading = true;
    this.getCourses()
      .subscribe(courses => this.isLoading = false);
  }

  getCourses(): Observable<any> {
    return timer(2000);
  }
}
