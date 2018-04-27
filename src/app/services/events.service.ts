import { Injectable, Inject } from '@angular/core';

import { DevApiPath } from '../dependencyInjection/tokens';
import { Event } from '../models/event';
import { EventsResponse } from '../models/eventsResponse';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) { }

  private apiPath = 'https://48tof4n3u3.execute-api.us-east-2.amazonaws.com/dev';

  public getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiPath}/getevents`);
  }
}
