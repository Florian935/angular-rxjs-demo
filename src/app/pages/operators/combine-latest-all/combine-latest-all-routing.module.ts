import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineLatestAllComponent } from './combine-latest-all.component';

const routes: Routes = [{ path: '', component: CombineLatestAllComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CombineLatestAllRoutingModule {}
