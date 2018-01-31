import { Component, Input, Output, EventEmitter } from '@angular/core'
import { EventListComponent } from './events-list.component';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
        .thumbnail { min-height: 260px;}
        .padding-10 {margin-Top: 15px;}
    `]
})
export class EventThumbNail {
    @Input() eventinput: any
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        console.log('clicked')
        this.eventClick.emit(this.eventinput.name)
    }

    logVijay() {
        console.log("Vijay")
    }

}