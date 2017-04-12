import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


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


  getProfile(authKey: string){
    return this.angularFire.database.list("users/", {
      query: {
        orderByChild: "uid",
        equalTo: authKey
      }
    });
  }

  // addNewFriend(newMatch, profile) {
  //   console.log(newMatch);
  //   console.log(newMatch.matchUserId);
  //   console.log(profile[0].$key);
  //   var memberEntryInFirebase = this.getUserById(profile[0].$key);
  //   memberEntryInFirebase.push(matches: newMatch.matchUserId);
  //   }

  addNewFriend(newMatch, profile) {
    console.log(newMatch);
    this.angularFire.database.list('users/' + profile[0].$key + '/matches').push(newMatch);
  }
}
