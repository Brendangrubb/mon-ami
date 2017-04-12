import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Router} from "@angular/router";
import { AuthService } from '../providers/auth.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [UsersService, AuthService]
})

export class NewUserComponent implements OnInit {
  autoGetLocation:boolean = true;
  location;
  sentLocation;
  locationButton:string= "btn btn-md active btn-primary";
  username: string;
  childArray = [];
  interestArray = [];
  user;

  constructor(private usersService: UsersService, private af: AngularFire, private router: Router, private authService: AuthService) { }

  setPosition(position){
    this.sentLocation = [position.coords.latitude, position.coords.longitude]
  }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      }
    });

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
    this.locationButton = "btn btn-md active btn-primary";
  }

  getLocation(){
    if(this.autoGetLocation){
      this.locationButton = "btn btn-md btn-primary"
      this.autoGetLocation = false;
    } else {
      this.locationButton = "btn btn-md active btn-primary";
      this.autoGetLocation = true;
    }
  }

  saveUser(newUsername, newAge, newGender, newAbout, newStatus){
    if(this.autoGetLocation){
    } else {
      this.sentLocation = this.location;
    }
    var newAccount = {
      username: newUsername,
      age: parseInt(newAge),
      gender: newGender,
      about: newAbout,
      status: newStatus,
      location: this.sentLocation,
      children: this.childArray,
      interests: this.interestArray,
      uid: this.user.uid
    };
    this.usersService.saveUser(newAccount);
    this.router.navigate(['profile/:id']);
  }

  addNewChild(childGender: string, childAge: string){
    var newChild = {
      "gender": childGender,
      "age": childAge
    }
    this.childArray.push(newChild);
  }

  addInterest(inter){
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
