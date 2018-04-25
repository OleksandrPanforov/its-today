import { Injectable, Inject } from '@angular/core';

import { DevApiPath } from '../dependencyInjection/tokens';
import { Event } from '../models/event';
import { EventsResponse } from '../models/eventsResponse';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  private apiPath = 'https://48tof4n3u3.execute-api.us-east-2.amazonaws.com/dev/';

  public getAllEvents() {
    return this.http.get<HttpResponse<EventsResponse>>(`${this.apiPath}getevents`);
  }
}
