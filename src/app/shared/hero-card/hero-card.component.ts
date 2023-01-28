import {Component, Input, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {IHero} from "../../hero/interfaces/hero.interface";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {

  @Input() hero: IHero;

  constructor(
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.swipeGesture(false)
  }

  ngOnInit() {}

}
