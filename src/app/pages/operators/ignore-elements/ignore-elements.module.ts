import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgnoreElementsRoutingModule } from './ignore-elements-routing.module';
import { IgnoreElementsComponent } from './ignore-elements.component';


@NgModule({
  declarations: [
    IgnoreElementsComponent
  ],
  imports: [
    CommonModule,
    IgnoreElementsRoutingModule
  ]
})
export class IgnoreElementsModule { }
