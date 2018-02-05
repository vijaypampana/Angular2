import {
    EventRouteActivator,
    EventListComponent,
    EventThumbNail,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver
} from './events/index'

import { HttpModule } from '@angular/http';
import { ToastrService } from './common/toastr.service';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './Login/events-app-component'
import { NavigationController } from './navbar/navbar.component';
import { EventService } from './services/event.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './common/error/404.component';


@NgModule({
    imports:    [
        BrowserModule, 
        RouterModule.forRoot(appRoutes)
    ],
    declarations:  [
        EventsAppComponent,
        EventListComponent,
        EventThumbNail, 
        NavigationController,  
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers:[
        EventService, 
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver
    ],

    bootstrap: [EventsAppComponent]
})
export class AppModule {}

    function checkDirtyState(component: CreateEventComponent) {
        if(component.isDirtyProperty) {
            return window.confirm('You have not saved this event, do you really want to cancel?')
        }
        return true;
    }
