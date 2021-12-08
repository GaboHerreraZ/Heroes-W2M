import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
