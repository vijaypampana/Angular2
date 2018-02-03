import { Component, Input, Output, EventEmitter } from '@angular/core'
import { EventListComponent } from './events-list.component';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styleUrls:['app/events/event-thumbnail.component.css']
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

    getStartTimeClass():any {
        const isEarlyStart = this.eventinput && (this.eventinput.time == '8:00 am')
        const isNormalStart = this.eventinput && (this.eventinput.time == '9:00 am')
        return {green: isEarlyStart, bold: isNormalStart}   
    }

    getStartTimeStyle():any {
        if(this.eventinput && (this.eventinput.time == '8:00 am')) {
            return {color: '#003300', 'font-weight': 'bold'}
        } else {
            return {}
        }
    }

}