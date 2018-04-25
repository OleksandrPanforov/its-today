import * as fromEvents from './events.reducer';
import { ActionReducerMap, ActionReducer } from '@ngrx/store';

export interface State {
  events: fromEvents.State;
}

export const reducers: ActionReducerMap<State> = {
  events: fromEvents.eventsReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    const newState = reducer(state, action);
    console.log('Action:    ', action);
    return newState;
  };
}
