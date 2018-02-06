import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
    templateUrl:'app/user/profile/profile.component.html',
    styleUrls:['app/user/profile/profile.component.css']
})
export class ProfileComponent implements OnInit {
    constructor(private auth:AuthService, private route: Router) {}
    profileForm:FormGroup
    
    ngOnInit() {
        let firstName = new FormControl(this.auth.currentUser.firstName)
        let lastName = new FormControl(this.auth.currentUser.lastName)
        this.profileForm = new FormGroup ({
            firstName: firstName,
            lastName: lastName
        })
    }

    cancel() {
        this.route.navigate(['/events'])
    }

    saveProfile(formValues) {
        this.auth.updateCurrentUser(formValues.firstName, formValues.LastName)
        this.route.navigate(['/events'])
    }
}