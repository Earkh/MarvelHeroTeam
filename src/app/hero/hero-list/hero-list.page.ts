import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
})
export class HeroListPage implements OnInit {

  heroesList: any[];
  heroName: string;

  limit = 20;
  offset = 0;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getAllHeroes(this.limit, this.offset).subscribe(data => {
      this.heroesList = data;
    })
  }

  searchHeroesByName() {
    if (this.heroName.length >= 3) {
      this.heroService.getHeroesByName(this.heroName).subscribe(data => {
        this.heroesList = data;
      })
    }
    if (this.heroName.length === 0) {
      this.heroService.getAllHeroes(20, 0).subscribe(data => {
        this.heroesList = data;
      })
    }
  }

  onIonInfinite(ev: Event) {
    this.offset += 20;
    this.heroService.getAllHeroes(this.limit, this.offset).subscribe(data => {
      this.heroesList = this.heroesList.concat(data);
      console.log(this.heroesList)
    })
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
