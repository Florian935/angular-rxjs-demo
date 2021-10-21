import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistinctRoutingModule } from './distinct-routing.module';
import { DistinctComponent } from './distinct.component';


@NgModule({
  declarations: [
    DistinctComponent
  ],
  imports: [
    CommonModule,
    DistinctRoutingModule
  ]
})
export class DistinctModule { }
