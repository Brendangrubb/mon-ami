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
  // saveMatches(horses) {
  //   this.users.matches.push(horses);
  // }
}
