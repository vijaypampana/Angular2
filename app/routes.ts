import {
    CreateEventComponent,
    EventDetailsComponent,
    EventListComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'
import { Routes } from '@angular/router'
import { Error404Component } from './common/error/404.component';


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
    },
    {
        path: 'user',
        loadChildren:'app/user/user.module#UserModule'
    }
]

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash : true})
