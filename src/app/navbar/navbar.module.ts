import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar.component';
import { CustomCommonModule } from '../shared/modules/custom-common.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CustomCommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
