import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { HeroService } from './shared/hero.service';

const routes: Routes = [
  {
    path: '',
    component: HeroListComponent
  },
  {
    path: 'create',
    component: HeroComponent
  },
  {
    path: 'edit/:id',
    component: HeroComponent,
    resolve: {
      data: HeroService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
