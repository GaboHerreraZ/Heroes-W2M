import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from '../table/table.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { CustomtranslateModule } from './custom-translate.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    MaterialModule,
    CustomtranslateModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    MaterialModule,
    CustomtranslateModule,
    RouterModule
  ]
})
export class CustomCommonModule { }
