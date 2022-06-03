import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CardModule } from './card/card.module';
import { HomeComponent } from './home.component';
import { DetailsCharacterComponent } from './details-character/details-character.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormComponent } from '../home/form/form.component';
import { GoTopModule } from '../go-top/go-top.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterLettersPipe } from './details-character/filter-letters.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsCharacterComponent,
    FilterLettersPipe,
    FormComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    InfiniteScrollModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    GoTopModule,
  ],
  exports: [
    CardModule,
    HomeComponent,
  ]
})
export class HomeModule { }
