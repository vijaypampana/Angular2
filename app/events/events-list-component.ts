import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list-component.html'
})
export class EventListComponent {

    event = {
        id: 1,
        name: 'Angular Connect',
        date: '1/29/2018',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/asserts/images/angularconnect-shield.png',
        location: {
            address: '14 Downey Drive',
            city: 'Manchester',
            state: 'CT',
            zip: '06040'
        }
    }


}

