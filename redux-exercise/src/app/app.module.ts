import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoService} from './todo.service';
import {NgRedux} from '@angular-redux/store';
import {AppState, INITIAL_STATE, rootReducer} from './store';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<Readonly<AppState>>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }
}
