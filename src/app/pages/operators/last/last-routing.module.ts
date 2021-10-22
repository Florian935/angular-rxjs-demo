import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastComponent } from './last.component';

const routes: Routes = [{ path: '', component: LastComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LastRoutingModule {}
