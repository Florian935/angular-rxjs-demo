import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatMapRoutingModule } from './concat-map-routing.module';
import { ConcatMapComponent } from './concat-map.component';


@NgModule({
  declarations: [
    ConcatMapComponent
  ],
  imports: [
    CommonModule,
    ConcatMapRoutingModule
  ]
})
export class ConcatMapModule { }
