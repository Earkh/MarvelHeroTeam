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

  limit = 30;
  offset = 0;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getAllHeroes(this.limit, this.offset).subscribe(data => {
      this.heroesList = data;
    })
  }

  searchHeroesByName(e: any) {
    if (e.target.value.length >= 3) {
      this.heroService.getHeroesByName(e.target.value).subscribe(data => {
        this.heroesList = data;
      })
    }
    if (e.target.value.length === 0) {
      this.heroService.getAllHeroes(20, 0).subscribe(data => {
        this.heroesList = data;
      })
    }
  }

  onIonInfinite(ev: Event) {
    this.offset += 30;
    this.heroService.getAllHeroes(this.limit, this.offset).subscribe(data => {
      this.heroesList = this.heroesList.concat(data);
    })
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
