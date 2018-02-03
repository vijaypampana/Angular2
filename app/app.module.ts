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
        EventDetailsComponent
    ],
    providers:[
        EventService, 
        ToastrService
    ],

    bootstrap: [EventsAppComponent]
})
export class AppModule {

}