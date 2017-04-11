import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
import { AuthService } from '../providers/auth.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:  [ UsersService ]
})
export class ProfileComponent implements OnInit {
  userKey: string = " ";
  user;
  profile;

  constructor(private af: AngularFire, private route: ActivatedRoute, private location: Location, private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
        console.log(this.user.uid);
      } else {
        this.user= {};
      }
    });
    this.usersService.getProfile(this.user.uid).subscribe( snap => {
      this.profile = snap;
      console.log(this.profile);
    })
  }


}
