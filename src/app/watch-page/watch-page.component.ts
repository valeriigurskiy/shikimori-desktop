import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.css']
})
export class WatchPageComponent implements OnInit {

  id: number;
  episode: number;
  translatorsName: string[] = [];
  sourceNotEmpty: boolean = false;
  loaded: boolean = false;
  urlSelect: boolean = false;
  currentURL: string;
  selectedValue;
  isCollapsed = false;
  allepisodes: number;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, public sanitizer: DomSanitizer) {
    this.activatedRoute.params.subscribe((params: Params) => {
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
