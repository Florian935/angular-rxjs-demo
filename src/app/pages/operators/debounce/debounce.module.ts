import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebounceRoutingModule } from './debounce-routing.module';
import { DebounceComponent } from './debounce.component';


@NgModule({
  declarations: [
    DebounceComponent
  ],
  imports: [
    CommonModule,
    DebounceRoutingModule
  ]
})
export class DebounceModule { }
