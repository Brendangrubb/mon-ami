import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './providers/auth.service';
import {Ng2Webstorage} from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { NewUserComponent } from './new-user/new-user.component';
import { InterestsPipe } from './interests.pipe';
import { LoginComponent } from './login/login.component';
import { LoggedOffComponent } from './logged-off/logged-off.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatchesComponent } from './matches/matches.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesComponent } from './messages/messages.component';
import { ValuesPipe } from './values.pipe';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    NewUserComponent,
    InterestsPipe,
    LoginComponent,
    LoggedOffComponent,
    EditProfileComponent,
    NavbarComponent,
    MatchesComponent,
    MessagesComponent,
    ValuesPipe
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
