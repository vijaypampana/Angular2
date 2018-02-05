import { userRoutes } from './user.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent
    ],
    providers:[

    ]
})
export class UserModule {

}