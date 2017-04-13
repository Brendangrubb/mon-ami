import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
import { AuthService } from '../providers/auth.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';
import {Router} from "@angular/router";

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
  childArray = [];
  interestArray = [];
  // NECCESSARY FOR GEOLOCATION
  autoGetLocation:boolean = true;
  sentLocation;
  locationButton:string= "btn btn-md active btn-primary";
  profileKey;

  constructor(private af: AngularFire, private route: ActivatedRoute, private location: Location, private usersService: UsersService, private authService: AuthService, private storage: LocalStorageService, private router: Router) { }

  ngOnInit() {
      this.profile = this.storage.retrieve('profileStorage');
      this.profileKey = this.storage.retrieve('profileKey');

      // console.log("storage (on edit)", this.profile);

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      }
      this.locationButton = "btn btn-md active btn-primary";
  }

// GEOLOCATION METHODS
  getLocation(){
    if(this.autoGetLocation){
      this.locationButton = "btn btn-md btn-primary"
      this.autoGetLocation = false;
    } else {
      this.locationButton = "btn btn-md active btn-primary";
      this.autoGetLocation = true;
    }
  }

  setPosition(position){
    this.sentLocation = [position.coords.latitude, position.coords.longitude]
  }
// END GEOLOCATION METHODS

  updateUser(userToUpdate, profileKey){
    console.log("edit-profile: ", this.profileKey);
    this.usersService.updateUserService(userToUpdate, this.profileKey);
    this.router.navigate(['profile/:id']);
  }

  updateChild(childGender: string, childAge: string){
    var newChild = {
      "gender": childGender,
      "age": childAge
    }
    this.childArray.push(newChild);
  }

  updateInterests(inter){
    this.interestArray.push(inter);
  }

  public interests = [
    { value: 'sports', display: 'Sports'},
    { value: 'art', display: 'Arts/Crafts'},
    { value: 'videoGames', display: 'Video Games/Entertainment'},
    { value: 'culinary', display: 'Culinary/Baking'},
    { value: 'literature', display: 'Literature/Book Clubs'},
    { value: 'homeGames', display: 'Board Games/Hobbies'},
    { value: 'outdoor', display: 'Outdoors/Hiking'},
    { value: 'parks', display: 'Parks/Kids Activities'},
    { value: 'community', display: 'Community Events'},
    { value: 'indoor', display: 'Indoor Activities (swimming, bowling, etc)'},
  ];
}
