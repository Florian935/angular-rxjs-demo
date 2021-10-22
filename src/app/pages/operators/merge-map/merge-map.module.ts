import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeMapRoutingModule } from './merge-map-routing.module';
import { MergeMapComponent } from './merge-map.component';


@NgModule({
  declarations: [
    MergeMapComponent
  ],
  imports: [
    CommonModule,
    MergeMapRoutingModule
  ]
})
export class MergeMapModule { }
