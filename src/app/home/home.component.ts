import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UsersService } from '../users.service';
import { NewUserComponent } from '../new-user/new-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UsersService]
})
export class HomeComponent implements OnInit {
  users;

  newUser:boolean = false;
  filterByInterest: string = "allInterests";

  constructor(private UsersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.UsersService.getUsers().subscribe(snap=>{
      this.users = snap;
    });
  }

  goToProfile(user) {
    this.router.navigate(['profile', user.$key]);
  }

  onChange(optionFromMenu: string) {
  this.filterByInterest = optionFromMenu;
}

}
