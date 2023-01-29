import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../../hero/interfaces/hero.interface';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
})
export class HeroItemComponent implements OnInit {

  @Input() hero: IHero;

  constructor() { }

  ngOnInit() {}

}
