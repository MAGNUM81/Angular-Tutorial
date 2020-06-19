import {actions} from './actions';

export interface AppState {
  counter: number;
}

export const INITIAL_STATE: AppState = {
  counter: 0,
}

export function rootReducer(state: AppState, action) : AppState {
  switch (action.type) {
    case actions.INCREMENT: return {...state, counter: state.counter + 1}

  }
  return state;
}
