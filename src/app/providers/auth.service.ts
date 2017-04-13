import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";

@Injectable()
export class AuthService {
  public displayName: string;
  public email: string;
  public uid: string;
  public user;

  constructor(public af: AngularFire) {
    // this.af.auth.subscribe(user => {
    //   if(user) {
    //     this.user = user;
    //   } else {
    //     this.user= {};
    //   }
    // });
  }

  logout(){
    return this.af.auth.logout();
  }

  login(email, password){
    return this.af.auth.login({
      email: email,
      password: password,
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

  signupWithEmail(email: string, password: string) {
  return this.af.auth.createUser({
    email: email,
    password: password
  })
}
}
