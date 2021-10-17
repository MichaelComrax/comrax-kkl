import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],exports : [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoreModule { }
