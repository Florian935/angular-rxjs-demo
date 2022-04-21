import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombineLatestAllRoutingModule } from './combine-latest-all-routing.module';
import { CombineLatestAllComponent } from './combine-latest-all.component';


@NgModule({
  declarations: [
    CombineLatestAllComponent
  ],
  imports: [
    CommonModule,
    CombineLatestAllRoutingModule
  ]
})
export class CombineLatestAllModule { }
