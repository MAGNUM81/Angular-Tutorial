import { Component } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from './store';
import {actions} from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'redux-demo';
  @select((s: AppState) => s.counter) count;

  constructor(private ngRedux: NgRedux<AppState>) {

  }

  increment() {
    //this.counter++
    this.ngRedux.dispatch({type: actions.INCREMENT, /*body: '', subject: ''*/})
  }

}
