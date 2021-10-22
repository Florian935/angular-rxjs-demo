import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeMapToRoutingModule } from './merge-map-to-routing.module';
import { MergeMapToComponent } from './merge-map-to.component';


@NgModule({
  declarations: [
    MergeMapToComponent
  ],
  imports: [
    CommonModule,
    MergeMapToRoutingModule
  ]
})
export class MergeMapToModule { }
