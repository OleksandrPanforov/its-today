import * as fromEvents from './events.reducer';
import { State, createFeatureSelector, createSelector } from '@ngrx/store';

const events = createFeatureSelector<fromEvents.State>('events');

export const getAllEvents = createSelector(
  events,
  state => state && [
    ...state.events.Events,
    ...state.events.Births,
    ...state.events.Deaths
    ]
);

export const getEvents = createSelector(
  events,
  state => state && state.events.Events
);

export const getBirths = createSelector(
  events,
  state => state.events.Births
);

export const getDeaths = createSelector(
  events,
  state => state.events.Deaths
);

export const getIsLoaded = createSelector(events, state => state.isLoaded);
export const getLoading = createSelector(events, state => state.loading);

export const getDate = createSelector(events, state => state.date);
