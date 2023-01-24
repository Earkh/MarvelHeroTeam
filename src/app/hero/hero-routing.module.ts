import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListPage } from './hero-list/hero-list.page';
import { HeroViewPage } from './hero-view/hero-view.page';

const routes: Routes = [
  {
    path: '',
    component: HeroListPage
  },
  {
    path: ':id',
    component: HeroViewPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
