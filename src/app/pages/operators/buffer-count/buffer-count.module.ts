import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferCountRoutingModule } from './buffer-count-routing.module';
import { BufferCountComponent } from './buffer-count.component';


@NgModule({
  declarations: [
    BufferCountComponent
  ],
  imports: [
    CommonModule,
    BufferCountRoutingModule
  ]
})
export class BufferCountModule { }
