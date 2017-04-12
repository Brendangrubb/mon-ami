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
    console.log(match.$key);
    var newMatch = match.$key;
    this.usersService.addNewFriend(newMatch, profile);
  }

}
