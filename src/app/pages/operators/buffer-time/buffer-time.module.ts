import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferTimeRoutingModule } from './buffer-time-routing.module';
import { BufferTimeComponent } from './buffer-time.component';


@NgModule({
  declarations: [
    BufferTimeComponent
  ],
  imports: [
    CommonModule,
    BufferTimeRoutingModule
  ]
})
export class BufferTimeModule { }
