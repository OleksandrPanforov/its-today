import * as actions from './events.actions';
import * as fromEvents from './events.reducer';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { EventsService } from '../services/events.service';


@Injectable()
export class EventsEffects {
  constructor(
    private $actions: Actions,
    private store: Store<fromEvents.State>,
    private eventsService: EventsService
    ) { }

/*   @Effect()
  getEvents$: Observable<Action> = this.$actions
    .ofType<actions.GetEvents>(actions.GET_EVENTS)
    .pipe(
      tap(() =>  this.eventsService.getAllEvents()
      .pipe(
        map(result =>
          !result
            ? new actions.GetEventsFail('Error')
            : new actions.GetEventsSuccess(result.body)
        )
      ))
    ); */
}
