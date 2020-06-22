import {Time} from '@angular/common';
import {actions} from './actions';

export interface AppState {
  lastUpdateTime: Date
  totalItems: number
}

export interface TodoItem {
  name: string,
  toggled: boolean
}

export const INITIAL_STATE : AppState = {
  lastUpdateTime : null,
  totalItems: 0,
}

export function rootReducer(state: Readonly<AppState>, action: Readonly<any>) {
  switch (action.type) {
    case actions.ADD_TODO: return {...state, lastUpdateTime: new Date(), totalItems: state.totalItems + 1, }
    case actions.REMOVE_TODO: return {...state, lastUpdateTime: new Date(), totalItems: state.totalItems - 1}
    case actions.TOGGLE_TODO: return {...state, lastUpdateTime: new Date() }
    case actions.REMOVE_ALL_TODOS: return {...state, lastUpdateTime: new Date(), totalItems: 0 }
  }
  return state;
}
