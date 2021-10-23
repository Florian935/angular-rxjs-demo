import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhaustMapRoutingModule } from './exhaust-map-routing.module';
import { ExhaustMapComponent } from './exhaust-map.component';


@NgModule({
  declarations: [
    ExhaustMapComponent
  ],
  imports: [
    CommonModule,
    ExhaustMapRoutingModule
  ]
})
export class ExhaustMapModule { }
