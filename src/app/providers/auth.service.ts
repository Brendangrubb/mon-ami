import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AuthService {
  public users: FirebaseListObservable<any>;
  // public user: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;


  constructor(public af: AngularFire) {
    this.af.auth.subscribe((auth) => {
      // console.log(this.user);
      if(auth != null) {
        // this.user = this.af.database.object('users/');
      }
    });
  }

  logout(){
    return this.af.auth.logout();
  }

  login(email, password){
    console.log(email);
    console.log(password);
    return this.af.auth.login({
      email: email,
      password: password,
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

}
