import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatMapToRoutingModule } from './concat-map-to-routing.module';
import { ConcatMapToComponent } from './concat-map-to.component';


@NgModule({
  declarations: [
    ConcatMapToComponent
  ],
  imports: [
    CommonModule,
    ConcatMapToRoutingModule
  ]
})
export class ConcatMapToModule { }
