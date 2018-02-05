import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../common/toastr.service';
import { Component, OnInit  } from '@angular/core'
import { EventService } from '../services/event.service';
import { IEvents } from '../common/index';


@Component({
    templateUrl: 'app/events/events-list.component.html'
})
export class EventListComponent implements OnInit  {

    events:IEvents[]
    constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
        
    }

    ngOnInit() {

        //Below code is no longer needed as we are using resolver in route.ts and created a new provider, now we can directly read events data
    //   this.eventService.getEvents().subscribe( events => {
    //       this.events = events
    //   });
        this.events = this.route.snapshot.data['events']
      
    }

    handleEventClicked(data) {
        console.log('received:', data)
    }

    handleThumbnailClick(eventName) {
      this.toastr.success(eventName)
    }
}

