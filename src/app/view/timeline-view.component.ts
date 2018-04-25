import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline-view.component.html'
})
export class TimelineComponent {
  @Input() title: string;
  @Input() events: Event[];

}
