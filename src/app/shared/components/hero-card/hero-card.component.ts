import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IHero } from '../../../hero/interfaces/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent {

  @Input() hero: IHero;

  constructor(
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.swipeGesture(false)
  }

}
