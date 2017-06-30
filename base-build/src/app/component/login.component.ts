import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '../../environments/environment';

import { UserModel } from  '../model/UserModel';


@Component({
    templateUrl: '../views/login.component.html',
    styleUrls: ['../../assets/style/login.css'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {

    userParams: UserModel = new UserModel();


    submit() {
        console.log(this.userParams)
    }
}
