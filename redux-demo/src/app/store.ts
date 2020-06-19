import {actions} from './actions';

export interface AppState {
  counter: number;
  messaging?: {
    newMessages: number
  }
}

export const INITIAL_STATE: AppState = {
  counter: 0,
  messaging: {
    newMessages: 5
  }
}

export function rootReducer(state: AppState, action) : AppState {
  switch (action.type) {
    case actions.INCREMENT: return {counter: state.counter + 1}

  }
  return state;
}
