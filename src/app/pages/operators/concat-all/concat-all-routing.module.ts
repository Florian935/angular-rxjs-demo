import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatAllComponent } from './concat-all.component';

const routes: Routes = [{ path: '', component: ConcatAllComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConcatAllRoutingModule {}
