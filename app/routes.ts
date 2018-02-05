import { CreateEventComponent } from './events/createEvent/create.event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/events-list.component';
import { Routes } from '@angular/router'
import { Error404Component } from './common/error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';

export const appRoutes: Routes = [
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: 'events',
        component: EventListComponent,
        resolve: {events: EventListResolver}
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    }
]

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash : true})