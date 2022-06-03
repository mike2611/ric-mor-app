import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [
  {
    path: 'episodes',
    component: EpisodesComponent,
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class EpisodesRoutingModule { }
