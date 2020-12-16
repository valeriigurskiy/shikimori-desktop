import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anime} from "../entity/Anime";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Deskomori'

  usersAnime: Anime;

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem("token").length > 10) {
      this.httpClient.get<Anime>("https://shikimori.one/api/v2/user_rates?user_id=" + localStorage.getItem("id") + "&status=watching&target_type=Anime").subscribe(
        (value: Anime) => {
              this.usersAnime = value;
              console.log(value);
        });
    }
    console.log(this.usersAnime);
  }


  ngOnInit(): void {
  }

}
