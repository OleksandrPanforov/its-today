import { Injectable, Inject } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { DevApiPath } from '../dependencyInjection/tokens';
import { Event } from '../models/event';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient, @Inject(DevApiPath)apiPath: string) {}

  public getAllEvents(): Event[] {
    return [];
  }

  public getEvents(): Event[] {
    return [];
  }

  public getBirths(): Event[] {
    return [];
  }

  public getDeaths(): Event[] {
    return [];
  }
}
