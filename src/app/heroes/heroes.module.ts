import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material.module';
import { TableModule } from '../shared/table/table.module';
import { HeroService } from './shared/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { UpperCaseDirective } from '../shared/directive/uppercase.directive';
import { HeroMessageComponent } from './hero-message/hero-message.component';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroComponent,
    UpperCaseDirective,
    HeroMessageComponent

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: []
})
export class HeroesModule { }
