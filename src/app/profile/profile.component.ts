import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:  [ UsersService ]
})
export class ProfileComponent implements OnInit {
  userKey: string = " ";
  profileUser;
  users;
  filterByInterest: string = "allInterests";

  constructor(private route: ActivatedRoute, private location: Location, private UsersService: UsersService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userKey = urlParameters['id'];
    });
    this.UsersService.getUserById(this.userKey).subscribe(snap => {
      this.profileUser = snap;
    });
    this.UsersService.getUsers().subscribe(users=>{
      this.users = users;
    });

  }

  onChange(optionFromMenu: string) {
  this.filterByInterest = optionFromMenu;
}

}
