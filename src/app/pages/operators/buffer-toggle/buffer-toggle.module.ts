import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferToggleRoutingModule } from './buffer-toggle-routing.module';
import { BufferToggleComponent } from './buffer-toggle.component';


@NgModule({
  declarations: [
    BufferToggleComponent
  ],
  imports: [
    CommonModule,
    BufferToggleRoutingModule
  ]
})
export class BufferToggleModule { }
