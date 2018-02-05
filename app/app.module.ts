import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { HttpModule } from '@angular/http';
import { ToastrService } from './common/toastr.service';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './Login/events-app-component'
import { EventListComponent } from './events/events-list.component';
import { EventThumbNail } from './events/event-thumbnail.component';
import { NavigationController } from './navbar/navbar.component';
import { EventService } from './services/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/createEvent/create.event.component'
import { Error404Component } from './common/error/404.component';
import { EventListResolver } from './events/event-list-resolver.service';

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
