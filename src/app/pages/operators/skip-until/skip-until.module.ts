import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkipUntilRoutingModule } from './skip-until-routing.module';
import { SkipUntilComponent } from './skip-until.component';


@NgModule({
  declarations: [
    SkipUntilComponent
  ],
  imports: [
    CommonModule,
    SkipUntilRoutingModule
  ]
})
export class SkipUntilModule { }
