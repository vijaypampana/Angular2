import { Component } from '@angular/core'
import { AuthService } from '../user/auth/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/navbar/navbar.component.html',
    styleUrls: ['app/navbar/navbar.component.css']
})
export class NavigationController {

    constructor(private auth:AuthService) {}

}