import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipWithComponent } from './zip-with.component';

const routes: Routes = [{ path: '', component: ZipWithComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ZipWithRoutingModule {}
