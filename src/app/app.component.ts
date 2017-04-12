import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  public loginStatus = false;

  constructor(public authService: AuthService, public usersService: UsersService, public router: Router){

  }

  ngOnInit() {
    this.loginStatus = false;
  }

  loginSender() {
      this.loginStatus = true;
  }

  logoutSender() {
    this.authService.logout();
    // this.loginStatus = false;
    this.router.navigate(['logged-off']);
  }

}
