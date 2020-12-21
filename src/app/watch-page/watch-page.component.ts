import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.css']
})
export class WatchPageComponent implements OnInit {

  newId: number
  id: number;
  episode: number;
  allepisodes: number;
  title: string
  translatorsName: string[] = [];
  sourceNotEmpty: boolean = false;
  loaded: boolean = false;
  urlSelect: boolean = false;
  currentURL: string;
  selectedValue;
  updatedEpisode: number;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, public sanitizer: DomSanitizer, private router: Router) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.newId = params['newId'];
      this.id = params['id'];
      this.episode = params['episode'];
      this.allepisodes = params['allepisodes']
    })
    this.httpClient.get<any>("https://plashiki.su/api/v2/anime/" + this.id + "/episode/" + this.episode +"?kind=dub")
      .subscribe(value => {
        this.translatorsName = value.result[`${this.episode}`].authors
      });
    this.loaded = true;

  }

  addOneEpisode() {
    const httpOptions = {
      body: new HttpParams()
        .set("User-Agent", "testingapi")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
    }
    const reqHeader = new HttpHeaders({
      'User-Agent': 'testingapi',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let newCounter = this.episode;
    newCounter++;
    console.log(newCounter);
    this.httpClient.post("https://shikimori.one/api/v2/user_rates/" + this.newId + "/increment", '', {headers: reqHeader}).subscribe(value => console.log(value));
    this.router.navigate(['watch', this.newId, this.id, newCounter, this.allepisodes]);
    setTimeout(() => window.location.reload(), 500);
  }

  sendURL(url: string){
    this.currentURL = url;
    this.urlSelect = true;
  }

  takeURL(){
    return this.currentURL;
  }

  ngOnInit(): void {
  }

}
