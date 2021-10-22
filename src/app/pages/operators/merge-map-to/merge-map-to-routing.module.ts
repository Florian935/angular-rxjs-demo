import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeMapToComponent } from './merge-map-to.component';

const routes: Routes = [{ path: '', component: MergeMapToComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MergeMapToRoutingModule {}
