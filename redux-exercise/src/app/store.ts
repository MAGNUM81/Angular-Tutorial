import {Time} from '@angular/common';

export interface AppState {
  lastUpdateTime: Time
  totalItems: number
  todos: any[]
}

export function rootReducer(state: Readonly<AppState>, action: Readonly<string>) {
  switch (action.type) {

  }
}
