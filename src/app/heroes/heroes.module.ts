import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroModule } from './hero/hero.module';
import { HeroListModule } from './hero-list/hero-list.module';
import { HeroMessageModule } from './hero-message/hero-message.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HeroListModule,
    HeroModule,
    HeroMessageModule
  ],
  providers: []
})
export class HeroesModule { }
