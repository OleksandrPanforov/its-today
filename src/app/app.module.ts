import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './view/timeline-view.component';
import { EventsService } from './services/events.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { EventsEffects } from './store/events.effects';
import { eventsReducer } from './store/events.reducer';
import { DevApiPath } from './dependencyInjection/tokens';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ EventsEffects ]),
    StoreModule.forFeature('events', eventsReducer),
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
