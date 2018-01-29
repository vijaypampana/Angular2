import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './Login/events-app-component'
import { EventListComponent } from './events/events-list-component';

@NgModule({
    imports:    [BrowserModule],
    declarations:  [EventsAppComponent,EventListComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}