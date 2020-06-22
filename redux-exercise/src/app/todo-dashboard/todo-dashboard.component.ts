import {Component, OnInit} from '@angular/core';
import { TodoService } from '../todo.service';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../store';
import {actions} from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  @select((s: AppState) => s.totalItems) totalTodos;
  @select((s: AppState) => s.lastUpdateTime) lastUpdate;

  // Read the comment in TodoService
  constructor(private service: TodoService, private ngRedux: NgRedux<AppState>) {
    service.todoAdded.subscribe(() => {
      this.ngRedux.dispatch({type: actions.ADD_TODO})
    });

    service.todoRemoved.subscribe(() => {
      this.ngRedux.dispatch({type: actions.REMOVE_TODO})
    });

    service.todoToggled.subscribe(() => {
      this.ngRedux.dispatch({type: actions.TOGGLE_TODO})
    });

    service.todosCleared.subscribe(() => {
      this.ngRedux.dispatch({type: actions.REMOVE_ALL_TODOS})
    });
  }

  clearTodos() {
    this.service.clearTodos();
  }

  ngOnInit(): void {
    this.totalTodos = this.ngRedux.getState().totalItems;
  }
}
