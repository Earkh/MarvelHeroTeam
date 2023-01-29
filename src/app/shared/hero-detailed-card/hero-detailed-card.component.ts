import { Component, Input } from '@angular/core';
import { IHero } from '../../hero/interfaces/hero.interface';

@Component({
  selector: 'app-hero-detailed-card',
  templateUrl: './hero-detailed-card.component.html',
  styleUrls: ['./hero-detailed-card.component.scss'],
})
export class HeroDetailedCardComponent {

  @Input() hero: IHero;
  constructor() { }

}
