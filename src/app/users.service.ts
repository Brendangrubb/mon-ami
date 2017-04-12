import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class UsersService {
  users:FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users=angularFire.database.list('users');
  }

  getUsers(){
    return this.users;
  }

  saveUser(user){
    this.users.push(user);
  }

  getUserById(key: string) {
    return this.angularFire.database.object('users/' + key);
  }

  getProfile(authKey: string){
    // console.log(authKey);
    return this.angularFire.database.list("users/", {
      query: {
        orderByChild: "uid",
        equalTo: authKey
      }
    });
  }
}
