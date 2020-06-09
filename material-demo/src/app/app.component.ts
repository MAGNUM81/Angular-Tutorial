import { Component } from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;

  onChange($event: MatCheckboxChange) {

  }
}
