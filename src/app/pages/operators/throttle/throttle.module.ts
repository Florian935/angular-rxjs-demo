import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThrottleRoutingModule } from './throttle-routing.module';
import { ThrottleComponent } from './throttle.component';


@NgModule({
  declarations: [
    ThrottleComponent
  ],
  imports: [
    CommonModule,
    ThrottleRoutingModule
  ]
})
export class ThrottleModule { }
