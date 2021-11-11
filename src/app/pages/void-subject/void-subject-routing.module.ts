import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoidSubjectComponent } from './void-subject.component';

const routes: Routes = [{ path: '', component: VoidSubjectComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VoidSubjectRoutingModule {}
