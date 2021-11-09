import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectableRoutingModule } from './connectable-routing.module';
import { ConnectableComponent } from './connectable.component';


@NgModule({
  declarations: [
    ConnectableComponent
  ],
  imports: [
    CommonModule,
    ConnectableRoutingModule
  ]
})
export class ConnectableModule { }
