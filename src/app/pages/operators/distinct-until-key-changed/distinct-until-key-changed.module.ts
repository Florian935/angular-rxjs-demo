import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistinctUntilKeyChangedRoutingModule } from './distinct-until-key-changed-routing.module';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed.component';


@NgModule({
  declarations: [
    DistinctUntilKeyChangedComponent
  ],
  imports: [
    CommonModule,
    DistinctUntilKeyChangedRoutingModule
  ]
})
export class DistinctUntilKeyChangedModule { }
