import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AccessToken} from "../entity/AccessToken";
import {WhoAmI} from "../entity/WhoAmI";

@Injectable()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginTouched: boolean = false;
  requestValid: boolean = false;
  currentUser: WhoAmI
  accessTokenResult: boolean;
  currentToken: string;

  constructor(private httpClient: HttpClient) {
    this.currentToken = localStorage.getItem("token");
    if (localStorage.getItem("token")) {
      this.accessTokenResult = true;
      this.getWhoIAm();
    } else {
      this.accessTokenResult = false;
    }
  }

  ngOnInit(): void {
  }

  getWhoIAm() {
    const reqHeader = new HttpHeaders({
      'User-Agent': 'testingapi',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.httpClient.get<WhoAmI>("https://shikimori.one/api/users/whoami", { headers: reqHeader}).subscribe(value => {
      this.currentUser = value
      localStorage.setItem("id", String(value.id));
    });
  }

  getOauthDialogLink(service: string, then?: string | null) {
    let url = `https://shikimori.one/oauth/authorize?client_id=zAKRfBZS5Ku7lB30Rwmrlr_HpAbjajHfTkPxpAtL0-I&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code`
    if (then) {
      url += '&state=then%3D' + encodeURIComponent(then)
    }
    return url;
  }

  loginvia(service: string) {
    var win = window.open(this.getOauthDialogLink(service), '_blank', 'toolbar=0,location=0,menubar=0,height=600,width=450');
    this.loginTouched = true;
  }

  getToken(token: string) {
    console.log(token);
    const url = "https://shikimori.one/oauth/token";
    const httpOptions = {
      body: new HttpParams()
        .set("User-Agent", "testingapi")
        .set("grant_type", "authorization_code")
        .set("client_id", "zAKRfBZS5Ku7lB30Rwmrlr_HpAbjajHfTkPxpAtL0-I")
        .set("client_secret", "BxkNy_NbP-b2qSF786wZKGFenUrf4fm60aDCXX9FrKU")
        .set("code", token)
        .set("redirect_uri", "urn:ietf:wg:oauth:2.0:oob")
    };
    this.httpClient.post<AccessToken>(url, httpOptions.body).subscribe(value => localStorage.setItem("token", value.access_token));
    setTimeout(() => window.location.reload(), 5000);
  }
}
