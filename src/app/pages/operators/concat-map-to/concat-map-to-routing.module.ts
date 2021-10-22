import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapToComponent } from './concat-map-to.component';

const routes: Routes = [{ path: '', component: ConcatMapToComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConcatMapToRoutingModule {}
