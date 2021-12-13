import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table.component';
import { MaterialModule } from '../modules/material.module';
import { CustomtranslateModule } from '../modules/custom-translate.module';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CustomtranslateModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
