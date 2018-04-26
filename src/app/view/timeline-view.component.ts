import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event';
import { DragulaService, dragula } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.css', '../../../node_modules/dragula/dist/dragula.css']
})
export class TimelineComponent {
  @Input() title: string;
  @Input() events: Event[];
  events2: Event[] = [{
    'year': '1792',
    'text': 'Highwayman Nicolas J. Pelletier becomes the first person executed by guillotine.',
    'html': '<a href="https://wikipedia.org/wiki/Highwayman" title="Highwayman">Highwayman</a> <a href="https://wikipedia.org/wiki/Nicolas_Jacques_Pelletier" title="Nicolas Jacques Pelletier">Nicolas J. Pelletier</a> becomes the first person executed by <a href="https://wikipedia.org/wiki/Guillotine" title="Guillotine">guillotine</a>.',
    'links': [
      {
        'title': 'Highwayman',
        'link': 'https://wikipedia.org/wiki/Highwayman'
      },
      {
        'title': 'Nicolas Jacques Pelletier',
        'link': 'https://wikipedia.org/wiki/Nicolas_Jacques_Pelletier'
      },
      {
        'title': 'Guillotine',
        'link': 'https://wikipedia.org/wiki/Guillotine'
      }
    ]
  }];

  constructor(private dragulaService: DragulaService) {
    this.dragulaService.setOptions('bag-one', {
      accepts: (el, target, source, sibling) => {
        if (target.id === 'new_card') {
          console.log(target.id, source.id);
          return false;
        }
        return true;
      }
    });

    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }
}
