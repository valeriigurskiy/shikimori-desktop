import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {OAuthModule} from "angular-oauth2-oidc";
import {HashLocationStrategy, Location, LocationStrategy} from "@angular/common";

const routers = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'login', redirectTo: 'profile'
  }]


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    NgbModule,
    RouterModule,


  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
