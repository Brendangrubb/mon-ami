import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [UsersService]
})

export class NewUserComponent implements OnInit {
  autoGetLocation:boolean = true;
  location;
  sentLocation;
  locationButton:string= "btn btn-md active btn-primary";
  username: string;
  childArray = [];
  interestArray = [];

  constructor(private usersService: UsersService, private af: AngularFire) { }

  setPosition(position){
    this.sentLocation = [position.coords.latitude, position.coords.longitude]
  }

  ngOnInit() {
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

  saveUser(newUsername, newAge, newGender, newStatus){
    if(this.autoGetLocation){
    } else {
      this.sentLocation = this.location;
    }
    var newAccount = {
      location: this.sentLocation,
      gender: newGender.value,
      username: newUsername.value,
      age: parseInt(newAge.value),
      status: newStatus.value,
    };
    this.usersService.saveUser(newAccount);
  }

  addNewChild(childGender: string, childAge: string){
    console.log(childGender);
    console.log(childAge);
    var newChild = {
      "gender": childGender,
      "age": childAge
    }
    this.childArray.push(newChild);
    console.log(this.childArray);
  }

  addInterest(inter){
    // if(this.interestArray.length === 0){
    //   this.interestArray.push(inter);
    //   console.log(this.interestArray);
    // } else {
    //   for (let x = 0; x < this.interests.length; x++) {
    //     for(var i = 0; i < this.interestArray.length; ++i){
    //       if(inter != this.interestArray[i]){
    //         console.log(this.interestArray);
    //       }
    //     }
    //     return this.interestArray.push(inter);
    //   }
    // }
  }

  public interests = [
    { value: 'sports', display: 'Sports'},
    { value: 'art', display: 'Arts/Crafts'},
    { value: 'videoGames', display: 'Video Games/Entertainment'},
    { value: 'culinary', display: 'Culinary/Baking'},
    { value: 'literature', display: 'Literature/Book Clubs'},
    { value: 'game', display: 'Board Games/Hobbies'},
    { value: 'outdoor', display: 'Outdoors/Hiking'},
    { value: 'parks', display: 'Parks/Kids Activities'},
    { value: 'community', display: 'Community Events'},
    { value: 'indoor', display: 'Indoor Activities (swimming, bowling, etc)'},
  ];
}
