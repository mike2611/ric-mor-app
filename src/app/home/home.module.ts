import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './card/card.module';
import { HomeComponent } from './home.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    InfiniteScrollModule,
  ],
  exports: [
    CardModule,
    HomeComponent,
  ]
})
export class HomeModule { }
