import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoidSubjectRoutingModule } from './void-subject-routing.module';
import { VoidSubjectComponent } from './void-subject.component';


@NgModule({
  declarations: [
    VoidSubjectComponent
  ],
  imports: [
    CommonModule,
    VoidSubjectRoutingModule
  ]
})
export class VoidSubjectModule { }
