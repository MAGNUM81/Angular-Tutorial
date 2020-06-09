import { Component } from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  colors = [
    {id: 1, color: 'Black'},
    {id: 2, color: 'Red'},
    {id: 3, color: 'Blue'},
  ];
  color = 2;
}
