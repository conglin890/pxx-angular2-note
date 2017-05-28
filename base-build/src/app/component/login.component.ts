import { Component } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
   templateUrl: '../views/login.component.html',
  // styleUrls: ['./app.component.css']
})
export class LoginComponent {
  title = 'app works!';
  environmentName = environment.envName;
}
