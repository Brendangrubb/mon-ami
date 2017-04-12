import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import {Router} from "@angular/router";
import { UsersService } from './users.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthService, UsersService ]
})
export class AppComponent {

constructor(public authService: AuthService, public usersService: UsersService, public router: Router){

}

public loginStatus = false;

  loginSender() {
      this.loginStatus = true;
  }

  logoutSender() {
    if(this.loginStatus){
      this.loginStatus = false;
      this.authService.logout();
      this.router.navigate(['']);
    }
  }

}
