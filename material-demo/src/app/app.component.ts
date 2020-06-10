import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  minDate: any = new Date(2019, 6, 1);
  maxDate: any = new Date(2019, 7, 1);
}
