import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementAtRoutingModule } from './element-at-routing.module';
import { ElementAtComponent } from './element-at.component';


@NgModule({
  declarations: [
    ElementAtComponent
  ],
  imports: [
    CommonModule,
    ElementAtRoutingModule
  ]
})
export class ElementAtModule { }
