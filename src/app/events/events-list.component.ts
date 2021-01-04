import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared'

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-6" *ngFor="let event of events">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})

export class EventsListComponent implements OnInit {
  events: IEvent[]

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick = (eventName) => this.toastr.success(eventName)
}
