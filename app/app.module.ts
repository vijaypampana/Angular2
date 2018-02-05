
import {
    EventRouteActivator,
    EventListComponent,
    EventThumbNail,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver
} from './events/index'

import {
    ToastrService,
    Error404Component
} from './common/index'

import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './Login/events-app-component'
import { NavigationController } from './navbar/navbar.component';
import { EventService } from './services/event.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AuthService } from './user/auth/auth.service';


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
        EventListResolver,
        AuthService
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
