import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home.component';
import { CustomCommonModule } from '../shared/modules/custom-common.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CustomCommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
