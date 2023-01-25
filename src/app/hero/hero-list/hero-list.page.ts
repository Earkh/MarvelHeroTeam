import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
})
export class HeroListPage implements OnInit {

  heroesList: any[];
  heroName: string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getAllHeroes().subscribe(data => {
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
      this.heroService.getAllHeroes().subscribe(data => {
        this.heroesList = data;
      })
    }
  }

}
