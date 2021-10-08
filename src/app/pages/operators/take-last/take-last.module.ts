import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeLastRoutingModule } from './take-last-routing.module';
import { TakeLastComponent } from './take-last.component';


@NgModule({
  declarations: [
    TakeLastComponent
  ],
  imports: [
    CommonModule,
    TakeLastRoutingModule
  ]
})
export class TakeLastModule { }
