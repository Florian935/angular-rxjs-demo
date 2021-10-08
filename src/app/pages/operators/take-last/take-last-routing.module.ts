import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeLastComponent } from './take-last.component';

const routes: Routes = [{ path: '', component: TakeLastComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TakeLastRoutingModule {}
