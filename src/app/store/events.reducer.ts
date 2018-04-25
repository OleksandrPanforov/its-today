import * as actions from './events.actions';
import { EventsData } from '../models/eventsData';

export interface State {
  loading: boolean;
  isLoaded: boolean;
  date: string;
  events: EventsData;
}

export const initialState: State = {
  loading: false,
  isLoaded: false,
  date: '',
  events: new EventsData()
};

export function eventsReducer(state = initialState, action: actions.Actions) {
  switch (action.type) {
    case actions.GET_EVENTS: {
      return {
        ...state,
        loading: true
        };
    }
    case actions.GET_EVENTS_SUCCESS: {
      return {
        ...state,
        events: action.payload.data,
        date: action.payload.date,
        isLoaded: true,
        loading: false
      };
    }
    case actions.GET_EVENTS_FAIL: {
      return {
        ...state,
        isLoaded: false,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}
