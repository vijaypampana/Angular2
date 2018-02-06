import { Injectable, OnInit } from '@angular/core'
import { IUser } from '../../common/model/user.model';
    
@Injectable()
export class AuthService implements OnInit {
    currentUser:IUser
    loginUser(userName:string, password:string) {
        this.currentUser = {
            id: 1,
            userName: 'JohnUserName',
            firstName: 'John',
            lastName: 'Papa'
        }
    }

    ngOnInit() {
        
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string,lastName:string): any {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

}