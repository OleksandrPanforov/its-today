import { Action } from '@ngrx/store';
import { EventsResponse } from '../models/eventsResponse';

export const GET_EVENTS = '[Events] Get events';

export const GET_EVENTS_SUCCESS = '[Events] Get events success';

export const GET_EVENTS_FAIL = '[Events] Get events error';

export class GetEvents implements Action {
  readonly type = GET_EVENTS;
}

export class GetEventsSuccess implements Action {
  readonly type = GET_EVENTS_SUCCESS;

  constructor(public payload: EventsResponse) { }
}

export class GetEventsFail implements Action {
  readonly type = GET_EVENTS_FAIL;

  constructor(public payload) { }
}

export type Actions =
GetEvents | GetEventsSuccess | GetEventsFail;
