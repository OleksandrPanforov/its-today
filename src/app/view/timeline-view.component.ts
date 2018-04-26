import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event';
import { DragulaService, dragula } from 'ng2-dragula/ng2-dragula';
import { GameModes } from '../models/gameModes';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.css', '../../../node_modules/dragula/dist/dragula.css']
})
export class TimelineComponent implements OnInit {
  @Input() title: string;
  @Input() events: Event[] = [];
  @Input() timeline: Event[] = [];
  @Input() gameMode = GameModes.ByOne;

  @Output() nextCard: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dragulaService: DragulaService) {

  }

  ngOnInit() {
    this.dragulaService.setOptions('bag-one', {
      accepts: (el, target, source, sibling) => {
        if (target.id === 'new_card') {
          console.log(target.id, source.id);
          return false;
        }
        return true;
      },
      copy: true,
      direction: 'vertical'
    });

    this.dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    this.dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    this.dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    this.dragulaService.out.subscribe((value) => {
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
    this.events = [];
    this.nextCard.emit();
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
