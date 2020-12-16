import { Component } from '@angular/core';
import {
  ActivatedRoute,
  ChildActivationEnd,
  ChildActivationStart,
  NavigationEnd,
  NavigationStart,
  Router,
  RoutesRecognized
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

}
