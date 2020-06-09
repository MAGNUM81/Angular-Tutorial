import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  courses: any[] = [];

  constructor(db: AngularFirestore) {
    db.collection('/courses').get().subscribe(data => {
      console.log(data.docs);
      this.courses.push(data);
    });
  }
}
