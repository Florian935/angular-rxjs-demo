import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColdObservableRoutingModule } from './cold-observable-routing.module';
import { ColdObservableComponent } from './cold-observable.component';


@NgModule({
  declarations: [
    ColdObservableComponent
  ],
  imports: [
    CommonModule,
    ColdObservableRoutingModule
  ]
})
export class ColdObservableModule { }
