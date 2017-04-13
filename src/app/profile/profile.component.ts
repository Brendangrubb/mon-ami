import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
import { AuthService } from '../providers/auth.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:  [ UsersService ]
})
export class ProfileComponent implements OnInit {
  userKey: string = " ";
  userId;
  profile;
  profileKey: string;
  profileKeyStorage;
  messages;


  constructor(private af: AngularFire, private route: ActivatedRoute, private location: Location, private usersService: UsersService, private authService: AuthService, private storage: LocalStorageService) { }

  ngOnInit() {
    this.af.auth.subscribe(userId => {
      if(userId) {
        this.userId = userId;
      } else {

        this.userId = {};
      }
    });
      this.usersService.getProfile(this.userId.uid).subscribe( snap => {
        this.profile = snap;
        this.profileKey = this.profile[0].$key;
        this.messages = this.profile[0].messages;
        this.storage.store('profileStorage', this.profile);
        this.storage.store('profileKey', this.profileKey);
      });
      this.profile = this.storage.retrieve('profileStorage');
      this.profileKeyStorage = this.storage.retrieve('profileKey');
      // console.log("messages: ", this.messageStorage);
  }
}
