import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
import { AuthService } from '../providers/auth.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [ UsersService, AuthService ]
})
export class EditProfileComponent implements OnInit {
  userKey: string = " ";
  matches;
  filterByInterest: string = "allInterests";
  user;
  profile;

  constructor(private af: AngularFire, private route: ActivatedRoute, private location: Location, private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      }
    });
    this.route.params.forEach((urlParametes) => {
      console.log(this.user.uid);
      this.user.uid = urlParametes['id'];
    });
    // this.usersService.getProfile(this.user.uid).subscribe( snap => {
    //   this.profile = snap;
    // });
  }
}

// super@nerd.com
