import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


///Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
