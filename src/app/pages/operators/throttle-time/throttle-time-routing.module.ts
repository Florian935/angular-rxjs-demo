import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThrottleTimeComponent } from './throttle-time.component';

const routes: Routes = [{ path: '', component: ThrottleTimeComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThrottleTimeRoutingModule {}
