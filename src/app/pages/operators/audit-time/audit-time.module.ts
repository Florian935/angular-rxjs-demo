import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditTimeRoutingModule } from './audit-time-routing.module';
import { AuditTimeComponent } from './audit-time.component';


@NgModule({
  declarations: [
    AuditTimeComponent
  ],
  imports: [
    CommonModule,
    AuditTimeRoutingModule
  ]
})
export class AuditTimeModule { }
