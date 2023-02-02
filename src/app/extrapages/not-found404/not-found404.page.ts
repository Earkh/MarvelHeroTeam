import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {LayoutService} from "../../layouts/services/layout.service";

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.page.html',
  styleUrls: ['./not-found404.page.scss'],
})
export class NotFound404Page {

  constructor(
    private layoutService: LayoutService,
    private location: Location
  ) { }

  ionViewWillEnter() {
    this.layoutService.setFullPageLayout();
  }

  goBack() {
    this.location.back()
  }

}
