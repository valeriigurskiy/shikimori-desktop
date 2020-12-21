import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Anime} from "../entity/Anime";
import {GlobalAnime} from "../entity/GlobalAnime";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Deskomori'
  active = 'watching'

  usersAnimePlanned: GlobalAnime;
  usersAnimeWatching: GlobalAnime;
  usersAnimeRewatching: GlobalAnime;
  usersAnimeCompleted: GlobalAnime;
  usersAnimeOnHold: GlobalAnime;
  usersAnimeDropped: GlobalAnime;
  imageURL: string = "https://dere.shikimori.one/"

  userAuthorized: boolean;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getPlanned() {
    this.httpClient.get<GlobalAnime>("https://shikimori.one/api/users/" + localStorage.getItem("id") + "/anime_rates?status=planned&limit=200").subscribe(
      (value: GlobalAnime) => {
        this.usersAnimePlanned = value;
      });
  }

  getWatching() {
    this.httpClient.get<GlobalAnime>("https://shikimori.one/api/users/" + localStorage.getItem("id") + "/anime_rates?status=watching&limit=200").subscribe(
      (value: GlobalAnime) => {
        this.usersAnimeWatching = value;
      });
  }

  getRewatching() {
    this.httpClient.get<GlobalAnime>("https://shikimori.one/api/users/" + localStorage.getItem("id") + "/anime_rates?status=rewatching&limit=200").subscribe(
      (value: GlobalAnime) => {
        this.usersAnimeRewatching = value;
      });
  }

  getCompleted() {
    this.httpClient.get<GlobalAnime>("https://shikimori.one/api/users/" + localStorage.getItem("id") + "/anime_rates?status=completed&limit=200").subscribe(
      (value: GlobalAnime) => {
        this.usersAnimeCompleted = value;
      });
  }

  getOnHold() {
    this.httpClient.get<GlobalAnime>("https://shikimori.one/api/users/" + localStorage.getItem("id") + "/anime_rates?status=on_hold&limit=200").subscribe(
      (value: GlobalAnime) => {
        this.usersAnimeOnHold = value;
      });
  }

  getDropped() {
    this.httpClient.get<GlobalAnime>("https://shikimori.one/api/users/" + localStorage.getItem("id") + "/anime_rates?status=dropped&limit=200").subscribe(
      (value: GlobalAnime) => {
        this.usersAnimeDropped = value;
      });
  }

  addOneEpisode(animeID: number) {
    const httpOptions = {
      body: new HttpParams()
        .set("User-Agent", "testingapi")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
    }
    const reqHeader = new HttpHeaders({
      'User-Agent': 'testingapi',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    this.httpClient.post("https://shikimori.one/api/v2/user_rates/" + animeID + "/increment", '', { headers: reqHeader}).subscribe(value => console.log(value));
    setTimeout(() => window.location.reload(), 100);
  }

  watchAnime(id: number, episode: number, allepisodes: number){
    this.router.navigate(['watch', id, episode], {state: {id, episode, allepisodes}});
  }

  ngOnInit(): void {
    if (localStorage.getItem("token") && localStorage.getItem("token").length !== 0 && localStorage.getItem("id")) {
      this.getWatching();
      this.userAuthorized = true;
    } else {
      this.userAuthorized = false;
    }
  }

}
