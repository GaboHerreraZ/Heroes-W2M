import { NgModule } from '@angular/core';
import { HeroListComponent } from './component/hero-list.component';
import { CustomCommonModule } from 'src/app/shared/modules/custom-common.module';



@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CustomCommonModule
  ],
  exports: [
    HeroListComponent
  ]
})
export class HeroListModule { }