import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchMapToRoutingModule } from './switch-map-to-routing.module';
import { SwitchMapToComponent } from './switch-map-to.component';


@NgModule({
  declarations: [
    SwitchMapToComponent
  ],
  imports: [
    CommonModule,
    SwitchMapToRoutingModule
  ]
})
export class SwitchMapToModule { }
