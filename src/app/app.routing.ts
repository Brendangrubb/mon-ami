import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LoggedOffComponent } from './logged-off/logged-off.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MessagesComponent } from './messages/messages.component';
import { MatchesComponent } from './matches/matches.component';



const appRoutes:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"profile/:id",
    component:ProfileComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logged-off",
    component: LoggedOffComponent
  },
  {
    path: "new-user",
    component: NewUserComponent
  },
  {
    path: "edit-profile/:id",
    component: EditProfileComponent
  },
  {
    path: "messages",
    component:  MessagesComponent
  },
  {
    path: "matches",
    component:  MatchesComponent
  }
]
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
