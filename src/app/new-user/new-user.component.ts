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

}
