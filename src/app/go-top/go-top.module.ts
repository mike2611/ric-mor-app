import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoTopComponent } from './go-top.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    GoTopComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GoTopComponent,
  ]
})
export class GoTopModule { }
