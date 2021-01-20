import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { WatchPageComponent } from './watch-page/watch-page.component';
import {FormsModule} from "@angular/forms";
import { SingleAnimePageComponent } from './single-anime-page/single-anime-page.component';

const routers = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'watch/:newId/:id/:episode/:allepisodes', component: WatchPageComponent
  },
  {
    path: 'anime/:id', component: SingleAnimePageComponent
  }]


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    HomePageComponent,
    WatchPageComponent,
    SingleAnimePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers,
      { scrollPositionRestoration: 'disabled' }),
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
