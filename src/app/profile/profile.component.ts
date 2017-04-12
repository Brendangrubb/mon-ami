import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
import { AuthService } from '../providers/auth.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';
// import { Router } from "@angular/router";
import { Profile } from './../profile.model';



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

  constructor(private af: AngularFire, private route: ActivatedRoute, private location: Location, private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.af.auth.subscribe(userId => {
      if(userId) {
        this.userId = userId;
        console.log(this.userId.uid);
      } else {

        this.userId = {};
      }
    });
    // console.log(this.user.uid);
    this.usersService.getProfile(this.userId.uid).subscribe( snap => {
      this.profile = snap;
    });
  }
}
