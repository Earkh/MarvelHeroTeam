import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';
import { IHero } from '../interfaces/hero.interface';


@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.page.html',
  styleUrls: ['./hero-view.page.scss'],
})
export class HeroViewPage implements OnInit {

  hero$: Observable<IHero>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap
      .pipe(
        switchMap(({params}: Params) => {
          return this.heroService.getHero(Number(params.id));
        })
      );
  }

}
