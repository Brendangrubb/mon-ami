import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import {Router} from "@angular/router";
// import { UsersService } from '../users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {

constructor(public authService: AuthService, public router: Router){

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
