import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombineLatestWithRoutingModule } from './combine-latest-with-routing.module';
import { CombineLatestWithComponent } from './combine-latest-with.component';


@NgModule({
  declarations: [
    CombineLatestWithComponent
  ],
  imports: [
    CommonModule,
    CombineLatestWithRoutingModule
  ]
})
export class CombineLatestWithModule { }
