import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed.component';

const routes: Routes = [
    { path: '', component: DistinctUntilKeyChangedComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DistinctUntilKeyChangedRoutingModule {}
