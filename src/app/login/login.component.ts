import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import {Router} from "@angular/router";
import { UsersService } from '../users.service';
import {AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, UsersService]
})
export class LoginComponent implements OnInit {
  // users: FirebaseListObservable<any[]>;
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

// This is for auth
  loginWithEmail(email: string, password: string){
    this.authService.login(email, password).then(() => {
      // this.authService.getUid();
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }

  signupWithEmail(email: string, password: string, makeAccount) {
    // console.log(makeAccount);
    this.authService.signupWithEmail(email, password).then( () => {
        var newAccount = {
        username: makeAccount.username,
        }
        this.usersService.saveUser(newAccount);
      })
    }
    // End of auth
  }
