import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkipLastComponent } from './skip-last.component';

const routes: Routes = [{ path: '', component: SkipLastComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SkipLastRoutingModule {}
