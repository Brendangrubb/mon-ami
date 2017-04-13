import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../providers/auth.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  profile;
  userId;
  profileStorage;
  messages;
  messageButton = true;
  profileObject;

  constructor(private af: AngularFire, private usersService: UsersService, private authService: AuthService, private storage: LocalStorageService) { }

  ngOnInit() {
    this.af.auth.subscribe(userId => {
      if(userId) {
        this.userId = userId;
      } else {
        this.userId = {};
      }
    });
    this.profile = this.storage.retrieve('profileStorage');
    // this.messages = this.storage.retrieve('messages');
    console.log(this.profile[0].messages);
    this.usersService.getProfile(this.userId.uid).subscribe( snap => {
      this.profileObject = snap;
    });
  }

  showMessageForm() {
    this.messageButton = !this.messageButton;
  }

  submitForm(author: string, message: string, messageSenderId, profileObject) {
    console.log(messageSenderId);
    console.log(this.profileObject[0].$key);
    var profileKey = profileObject[0].$key;
    this.usersService.addNewReply(author, message, messageSenderId, profileKey);
  }
}
