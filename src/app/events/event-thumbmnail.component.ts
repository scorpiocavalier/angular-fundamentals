import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div
        [ngStyle]="getStartTimeStyle()"
        [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \$ {{ event?.price }}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        <span>Online URL: {{ event?.onlineUrl }}</span>
      </div>
    </div>
  `,
  styles: [`
    .pad-left { padding-left: 10px; }
    .thumbnail { min-height: 210px; }
  `]
})

export class EventThumbnailComponent implements OnInit {
  @Input() event: any

  constructor() { }

  ngOnInit() { }

  getStartTimeStyle = () => {
    return this.event && this.event.time === '8:00 am'
      ? {
        color: 'darkgreen',
        'font-weight': 'bold'
      }
      : {}
  }
}