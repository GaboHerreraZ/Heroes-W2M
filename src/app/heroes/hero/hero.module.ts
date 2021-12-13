import { NgModule } from '@angular/core';
import { HeroComponent } from './component/hero.component';
import { CustomCommonModule } from 'src/app/shared/modules/custom-common.module';
import { UpperCaseDirective } from 'src/app/shared/directive/uppercase.directive';



@NgModule({
  declarations: [HeroComponent, UpperCaseDirective],
  imports: [
    CustomCommonModule
  ], 
  exports: [
    HeroComponent,
    UpperCaseDirective
  ]
})
export class HeroModule { }
