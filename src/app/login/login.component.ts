import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import {Router} from "@angular/router";
import { UsersService } from '../users.service';
import {AngularFire, FirebaseListObservable } from 'angularfire2';
import { Profile } from './../profile.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, UsersService]
})
export class LoginComponent implements OnInit {
  public error: any;
  newUser: boolean = false;
  users;

  constructor(public usersService: UsersService, public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(snap=>{
      this.users = snap;
    });
  }

// this is for new user
addNewUser(){
  this.newUser = true;
}

saveNewUser(user){
  this.newUser = false;

  this.usersService.saveUser(user);
}

toggleSignUpForm(){
  this.newUser = false;
}

// This is for auth
  loginWithEmail(email: string, password: string){
    this.authService.login(email, password).then(() => {
      this.router.navigate(['profile/:id']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
          alert("Sorry this email or password is incorrect, please try again");
        }
      });
  }


  signupWithEmail(email: string, password: string, makeAccount) {
    this.authService.signupWithEmail(email, password).then( () => {
      this.router.navigate(['new-user']);
      })

    }
    // End of auth
  }
