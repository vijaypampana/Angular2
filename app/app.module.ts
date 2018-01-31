import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './Login/events-app-component'
import { EventListComponent } from './events/events-list.component';
import { EventThumbNail } from './events/event-thumbnail.component';
import { NavigationController } from './navbar/navbar.component';

@NgModule({
    imports:    [BrowserModule],
    declarations:  [EventsAppComponent,EventListComponent,EventThumbNail, NavigationController],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}