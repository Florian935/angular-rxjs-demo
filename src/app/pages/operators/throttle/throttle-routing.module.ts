import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThrottleComponent } from './throttle.component';

const routes: Routes = [{ path: '', component: ThrottleComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThrottleRoutingModule {}
