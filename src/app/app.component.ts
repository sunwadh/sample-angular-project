import { Component, OnInit } from "@angular/core";

import { UserService } from "./core";
import {TourService} from 'ngx-ui-tour-md-menu';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.populate();

  }
}
