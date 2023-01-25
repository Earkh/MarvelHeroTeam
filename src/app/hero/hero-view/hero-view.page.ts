import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.page.html',
  styleUrls: ['./hero-view.page.scss'],
})
export class HeroViewPage implements OnInit {

  hero$: Observable<any>;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
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
