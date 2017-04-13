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

  updateUserService(userToUpdate, profileKey) {
    var userInDatabase = this.getUserById(userToUpdate.$key);
    var uid =  userToUpdate.uid;
    var memberInDatabase = this.getUserByUid(uid);
    this.angularFire.database.object('users/' + profileKey).update({
      about: userToUpdate.about,
      age: userToUpdate.age,
      gender: userToUpdate.gender,
      location: userToUpdate.location,
      status: userToUpdate.status,
      username: userToUpdate.username
    });
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

  addNewFriend(newMatch, profile) {
    this.angularFire.database.list('users/' + profile[0].$key + '/matches').push(newMatch);
  }

  addNewMessage(author, message, friendKey, profileKey) {
    console.log(profileKey);
    this.angularFire.database.list('users/' + friendKey + '/messages').push({author: author, content: message, senderId: profileKey});
  }

  addNewReply(author, message, messageSenderId, profileKey) {
      this.angularFire.database.list('users/' + messageSenderId + '/messages').push({author: author, content: message, senderId: profileKey});
  }
}
