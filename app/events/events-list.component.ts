import { ToastrService } from './../common/toastr.service';
import { Component, OnInit  } from '@angular/core'
import { EventService } from '../services/event.service';

@Component({
    templateUrl: 'app/events/events-list.component.html'
})
export class EventListComponent implements OnInit  {

    events:any[]
    constructor(private eventService: EventService, private toastr: ToastrService) {
        
    }

    ngOnInit() {
      this.events = this.eventService.getEvents()
    }

    handleEventClicked(data) {
        console.log('received:', data)
    }

    handleThumbnailClick(eventName) {
      this.toastr.success(eventName)
    }
}

