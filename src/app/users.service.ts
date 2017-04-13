import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class UsersService {
  users:FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
  }

  getUsers(){
    return this.users;
  }

  saveUser(user){
    this.users.push(user);
  }

  updateUserService(userToUpdate) {
    // var userInDatabase = this.getUserById(userToUpdate.$key);
    // console.log("service- user in DB", userInDatabase);
    // userInDatabase
    // var uid =  userToUpdate.uid;
    // var memberInDatabase = this.getUserByUid(uid);
    // console.log(memberInDatabase);
    console.log("user service.ts: ", userToUpdate.uid);
    // this.angularFire.database.object('users/' +  + ).update({
    //   about: userToUpdate.about,
    //   age: userToUpdate.age,
    //   gender: userToUpdate.gender,
    //   location: userToUpdate.location,
    //   status: userToUpdate.status,
    //   username: userToUpdate.username
    // });
  }

  getUserByUid(uid: string){
    return this.angularFire.database.object('users/' + uid);
  }

  getUserById(key: string) {
    return this.angularFire.database.object('users/' + key);
  }

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
