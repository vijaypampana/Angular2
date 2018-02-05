import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    templateUrl:'app/events/createEvent/create.event.component.html'
})
export class CreateEventComponent {

    isDirtyProperty: boolean = true;
    constructor(private route:Router) {

    }
    saveForm() {

    }

    cancelForm() {
        this.route.navigate(['/events'])
    }

}