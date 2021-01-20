import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SingleAnime} from "../entity/SingleAnime";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-single-anime-page',
  templateUrl: './single-anime-page.component.html',
  styleUrls: ['./single-anime-page.component.css']
})
export class SingleAnimePageComponent implements OnInit {
  anime: SingleAnime;
  id: number;
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.httpClient.get<SingleAnime>('https://shikimori.one/api/animes/' + this.id).subscribe(value => this.anime = value);
  }

  ngOnInit(): void {
  }

}
