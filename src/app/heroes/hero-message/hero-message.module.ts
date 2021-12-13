import { NgModule } from '@angular/core';
import { HeroMessageComponent } from './component/hero-message.component';
import { CustomCommonModule } from 'src/app/shared/modules/custom-common.module';



@NgModule({
  declarations: [HeroMessageComponent],
  imports: [
    CustomCommonModule
  ],
  exports: [
    HeroMessageComponent
  ]
})
export class HeroMessageModule { }
