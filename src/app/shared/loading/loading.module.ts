import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './component/loading.component';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], exports: [
    LoadingComponent
  ]
})
export class LoadingModule { }
