import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
