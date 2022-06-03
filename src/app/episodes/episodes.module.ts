import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesComponent } from './episodes.component';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { CardComponent } from './card/card.component';
import { GoTopModule } from '../go-top/go-top.module';


import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    EpisodesComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    InfiniteScrollModule,
    MaterialModule,
    GoTopModule,
  ]
})
export class EpisodesModule { }
