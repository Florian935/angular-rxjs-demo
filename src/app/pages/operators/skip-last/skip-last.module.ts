import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkipLastRoutingModule } from './skip-last-routing.module';
import { SkipLastComponent } from './skip-last.component';


@NgModule({
  declarations: [
    SkipLastComponent
  ],
  imports: [
    CommonModule,
    SkipLastRoutingModule
  ]
})
export class SkipLastModule { }
