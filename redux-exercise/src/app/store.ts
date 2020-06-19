import {Time} from '@angular/common';
import {actions} from './actions';

export interface AppState {
  lastUpdateTime: Time
  totalItems: number
  todos: TodoItem[]
}

export interface TodoItem {
  name: string,
  toggled: boolean
}

export const INITIAL_STATE : AppState = {
  lastUpdateTime : null,
  totalItems: 0,
  todos: []
}

export function rootReducer(state: Readonly<AppState>, action: Readonly<any>) {
  switch (action.type) {
    case actions.ADD_TODO: return {...state, lastUpdateTime: new Date(), totalItems: state.totalItems + 1, todos: [...state.todos /*, <that new item we're tryna add?>*/]}
      break;
    case actions.REMOVE_TODO:
      break;
    case actions.TOGGLE_TODO:
      break;
    case actions.REMOVE_ALL_TODOS:
      break;
  }
  return state;
}
