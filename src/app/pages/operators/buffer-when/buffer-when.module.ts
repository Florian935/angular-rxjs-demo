import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferWhenRoutingModule } from './buffer-when-routing.module';
import { BufferWhenComponent } from './buffer-when.component';


@NgModule({
  declarations: [
    BufferWhenComponent
  ],
  imports: [
    CommonModule,
    BufferWhenRoutingModule
  ]
})
export class BufferWhenModule { }
