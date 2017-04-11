import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LoggedOffComponent } from './logged-off/logged-off.component';
import { NewUserComponent } from './new-user/new-user.component';

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
  }
]
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
