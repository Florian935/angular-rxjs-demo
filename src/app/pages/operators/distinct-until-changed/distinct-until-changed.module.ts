import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistinctUntilChangedRoutingModule } from './distinct-until-changed-routing.module';
import { DistinctUntilChangedComponent } from './distinct-until-changed.component';


@NgModule({
  declarations: [
    DistinctUntilChangedComponent
  ],
  imports: [
    CommonModule,
    DistinctUntilChangedRoutingModule
  ]
})
export class DistinctUntilChangedModule { }
