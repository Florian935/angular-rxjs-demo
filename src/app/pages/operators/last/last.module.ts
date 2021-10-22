import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastRoutingModule } from './last-routing.module';
import { LastComponent } from './last.component';


@NgModule({
  declarations: [
    LastComponent
  ],
  imports: [
    CommonModule,
    LastRoutingModule
  ]
})
export class LastModule { }
