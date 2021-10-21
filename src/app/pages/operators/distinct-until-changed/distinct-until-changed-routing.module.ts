import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistinctUntilChangedComponent } from './distinct-until-changed.component';

const routes: Routes = [{ path: '', component: DistinctUntilChangedComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DistinctUntilChangedRoutingModule {}
