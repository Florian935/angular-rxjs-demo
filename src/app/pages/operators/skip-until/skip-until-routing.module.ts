import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkipUntilComponent } from './skip-until.component';

const routes: Routes = [{ path: '', component: SkipUntilComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SkipUntilRoutingModule {}
