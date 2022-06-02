import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './card/card.module';
import { HomeComponent } from './home.component';
import { DetailsCharacterComponent } from './details-character/details-character.component';
import { HomeRoutingModule } from './home-routing.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsCharacterComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    InfiniteScrollModule,
    HomeRoutingModule,
  ],
  exports: [
    CardModule,
    HomeComponent,
  ]
})
export class HomeModule { }
