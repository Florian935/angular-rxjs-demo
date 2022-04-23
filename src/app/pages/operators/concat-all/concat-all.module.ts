import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatAllRoutingModule } from './concat-all-routing.module';
import { ConcatAllComponent } from './concat-all.component';


@NgModule({
  declarations: [
    ConcatAllComponent
  ],
  imports: [
    CommonModule,
    ConcatAllRoutingModule
  ]
})
export class ConcatAllModule { }
