import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent{
  public error: any;

  constructor(public authService: AuthService, private router: Router) {}

  loginWithEmail(email: string, password: string){
    this.authService.login(email, password).then(() => {
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }

}
