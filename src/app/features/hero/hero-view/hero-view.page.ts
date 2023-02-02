import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HeroService } from '../services/hero.service';
import { IHero } from '../interfaces/hero.interface';
import { LayoutService } from '../../../layouts/services/layout.service';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.page.html',
  styleUrls: ['./hero-view.page.scss'],
})
export class HeroViewPage implements OnInit {

  hero$: Observable<IHero>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap
      .pipe(
        switchMap(({params}: Params) => {
          return this.heroService.getHero(Number(params.id));
        })
      );
  }

  ionViewWillEnter() {
    this.layoutService.setFullPageLayout();
  }

}
