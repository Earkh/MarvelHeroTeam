import { Component, Input } from '@angular/core';
import { IHero } from '../../../hero/interfaces/hero.interface';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
})
export class HeroItemComponent {

  @Input() hero: IHero;

  constructor() { }

}
