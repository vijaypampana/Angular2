import { Router } from '@angular/router';
import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service';


@Component({
    templateUrl:'app/user/login/login.component.html',
    styleUrls:['app/user/login/login.component.css']
})
export class LoginComponent {

    constructor(private auth:AuthService, private route:Router) {}
    
    login(loginForm:any) {
        this.auth.loginUser(loginForm.userName,loginForm.password)
        this.route.navigate(['/user/profile'])
    }

    cancel() {
        this.route.navigate(['/events'])
    }

}