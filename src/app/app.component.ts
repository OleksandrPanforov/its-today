import { Component, OnInit } from '@angular/core';
import { Event } from './models/event';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import * as fromEvents from './store/events.reducer';
import * as actions from './store/events.actions';
import { getAllEvents } from './store/events.selectors';
import { map, tap } from 'rxjs/operators';
import { EventsService } from './services/events.service';
import { EventsData } from './models/eventsData';
import { EventsResponse } from './models/eventsResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  events$: Event[];

  constructor(private store: Store<fromEvents.State>, private eventsService: EventsService) {}

  ngOnInit() {
  }

  onClick() {
    this.events$ = this.eventsService.getAllEvents();
  }
}
