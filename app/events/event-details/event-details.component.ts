import { Component, OnInit } from '@angular/core'
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls:['app/events/event-details/event-details.component.css']
})
export class EventDetailsComponent  {
    event: any
    constructor(private eventService: EventService, private route: ActivatedRoute) {}
    
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
        
    }

}