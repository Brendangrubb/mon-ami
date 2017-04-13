import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../providers/auth.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
  providers: [ UsersService ]
})
export class MatchesComponent implements OnInit {
  matches;
  userKey: string = " ";
  userId;
  profile;
  matchedFriendArray= [];
  friendObjects = [];
  messageButton = true;

  constructor(private af: AngularFire, private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.af.auth.subscribe(userId => {
      if(userId) {
        this.userId = userId;
      } else {
        this.userId = {};
      }
    });
    // this.matches = this.usersService.getUsers();
    this.usersService.getUsers().subscribe(matches=>{
      this.matches = matches;
    });

    this.usersService.getProfile(this.userId.uid).subscribe( snap => {
      this.profile = snap;
    });
  }

  addFriend(match, profile) {
    // console.log(profile[0].matches);
    // console.log(match.$key);
    var newMatch = match.$key;
    this.usersService.addNewFriend(newMatch, profile);
  }


  // getFriendById(profile) {
  //
  //   var friendId = profile[0].matches;
  //   console.log(friendId);
  //   for (var i=0; i < friendId.length; i++) {
  //     this.matchedFriendArray.push(friendId[i]);
  //   }
  //   console.log(this.matchedFriendArray);
  // }
  getFriendById(profile) {
    for (let key of Object.keys(profile[0].matches)) {
      let friendId = profile[0].matches[key];
      this.matchedFriendArray.push(friendId);
    }
    for (var i = 0; i < this.matchedFriendArray.length; i++) {
      this.usersService.getUserById(this.matchedFriendArray[i]).subscribe(friend => {
        this.friendObjects.push(friend);
      });
    }
    return this.friendObjects;
  }

  showMessageForm() {
    this.messageButton = !this.messageButton;
  }

  submitForm(author: string, message: string, friend, profile) {
    var friendKey = friend.$key;
    var profileKey = profile[0].$key;
    this.usersService.addNewMessage(author, message, friendKey, profileKey);
  }
}
