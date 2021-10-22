import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgnoreElementsComponent } from './ignore-elements.component';

const routes: Routes = [{ path: '', component: IgnoreElementsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IgnoreElementsRoutingModule {}
