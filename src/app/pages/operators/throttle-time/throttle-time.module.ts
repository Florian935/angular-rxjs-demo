import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThrottleTimeRoutingModule } from './throttle-time-routing.module';
import { ThrottleTimeComponent } from './throttle-time.component';


@NgModule({
  declarations: [
    ThrottleTimeComponent
  ],
  imports: [
    CommonModule,
    ThrottleTimeRoutingModule
  ]
})
export class ThrottleTimeModule { }
