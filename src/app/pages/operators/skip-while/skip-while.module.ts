import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkipWhileRoutingModule } from './skip-while-routing.module';
import { SkipWhileComponent } from './skip-while.component';


@NgModule({
  declarations: [
    SkipWhileComponent
  ],
  imports: [
    CommonModule,
    SkipWhileRoutingModule
  ]
})
export class SkipWhileModule { }
