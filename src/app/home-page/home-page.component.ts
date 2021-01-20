import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Anime} from "../entity/Anime";
import {GlobalAnime} from "../entity/GlobalAnime";
import {Router} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AccessToken} from "../entity/AccessToken";
import {ViewportScroller} from "@angular/common";

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
  tokenValid: boolean;
  userAuthorized: boolean;
  closeResult = '';

  constructor(private httpClient: HttpClient, private router: Router, private modalService: NgbModal, private pv: ViewportScroller) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
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

  toSingleAnimePage(id){
    this.router.navigate(['anime', id]);
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

  addOneEpisode(animeID: number, content?) {
    const httpOptions = {
      body: new HttpParams()
        .set("User-Agent", "testingapi")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
    }
    const reqHeader = new HttpHeaders({
      'User-Agent': 'testingapi',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    this.httpClient.post("https://shikimori.one/api/v2/user_rates/" + animeID + "/increment", '', {headers: reqHeader})
      .subscribe(value => {
        const currentYOffset = window.pageYOffset;
        this.reloadComponent();
        this.pv.scrollToPosition([0, currentYOffset]);
      },
      error => {
        this.openModal(content);
      });
  }

  openModal(content) {
    console.log(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${HomePageComponent.getDismissReason(reason)}`;
    });
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  updateToken(){
    const url = "https://shikimori.one/oauth/token";
    const httpOptions = {
      body: new HttpParams()
        .set("User-Agent", "testingapi")
        .set("grant_type", "refresh_token")
        .set("client_id", "zAKRfBZS5Ku7lB30Rwmrlr_HpAbjajHfTkPxpAtL0-I")
        .set("client_secret", "BxkNy_NbP-b2qSF786wZKGFenUrf4fm60aDCXX9FrKU")
        .set("refresh_token", "henLyyJFdUyV314-ZefjgqzRAoYeIhZUm6ZGt3d10bY")
    };
    this.httpClient.post<AccessToken>(url, httpOptions.body).subscribe(value => {
      localStorage.setItem("token", value.access_token);
      localStorage.setItem("refresh_token", value.refresh_token);
    })
  }

  watchAnime(newId: number, id: number, episode: number, allepisodes: number) {
    this.router.navigate(['watch', newId, id, episode, allepisodes], {state: {newId, id, episode, allepisodes}});
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
