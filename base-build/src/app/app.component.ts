import { Component } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  environmentName = environment.envName;
}
