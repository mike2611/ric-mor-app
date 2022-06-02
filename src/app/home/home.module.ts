import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './card/card.module';
import { HomeComponent } from './home.component';
import { DetailsCharacterComponent } from './details-character/details-character.component';
import { HomeRoutingModule } from './home-routing.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterLettersPipe } from './details-character/filter-letters.pipe';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsCharacterComponent,
    FilterLettersPipe,
  ],
  imports: [
    CommonModule,
    CardModule,
    InfiniteScrollModule,
    HomeRoutingModule,
    MaterialModule,
  ],
  exports: [
    CardModule,
    HomeComponent,
  ]
})
export class HomeModule { }
