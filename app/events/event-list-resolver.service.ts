import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { EventService } from '../services/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventservice:EventService){}
    resolve() {
        return this.eventservice.getEvents().map (events => events)
    }

}