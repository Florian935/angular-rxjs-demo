import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZipWithRoutingModule } from './zip-with-routing.module';
import { ZipWithComponent } from './zip-with.component';


@NgModule({
  declarations: [
    ZipWithComponent
  ],
  imports: [
    CommonModule,
    ZipWithRoutingModule
  ]
})
export class ZipWithModule { }
