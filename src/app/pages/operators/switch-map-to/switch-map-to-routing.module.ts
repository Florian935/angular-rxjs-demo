import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchMapToComponent } from './switch-map-to.component';

const routes: Routes = [{ path: '', component: SwitchMapToComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SwitchMapToRoutingModule {}
