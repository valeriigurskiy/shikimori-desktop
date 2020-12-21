import {Component, HostListener, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AccessToken} from "../entity/AccessToken";
import {WhoAmI} from "../entity/WhoAmI";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  loginTouched: boolean = false;
  requestValid: boolean = true;
  currentUser: WhoAmI;
  accessTokenResult: boolean;
  currentToken: string;
  child = window;

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

  toShikimori(url: string){
    window.open(url, '_blank', 'toolbar=0,menubar=0');
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

  getToken() {
    const url = `https://shikimori.one/oauth/authorize?client_id=zAKRfBZS5Ku7lB30Rwmrlr_HpAbjajHfTkPxpAtL0-I&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope=user_rates`
    this.child.open(url, '_blank', 'toolbar=0,location=0,menubar=0,height=600,width=450');
    this.child.focus();
    this.loginTouched = true;
  }

  login(token: string) {
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
    this.httpClient.post<AccessToken>(url, httpOptions.body).subscribe(value => localStorage.setItem("token", value.access_token),
      error => this.requestValid = false);
    if (this.requestValid){
      setTimeout(() => window.location.reload(), 500);
    }
  }

  logOut() {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    setTimeout(() => window.location.reload(), 500);
  }

}
