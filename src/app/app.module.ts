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
import { WatchPageComponent } from './watch-page/watch-page.component';
import {FormsModule} from "@angular/forms";

const routers = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'watch/:newId/:id/:episode/:allepisodes', component: WatchPageComponent
  }]


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    HomePageComponent,
    WatchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    NgbModule,
    RouterModule,
    FormsModule,


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
