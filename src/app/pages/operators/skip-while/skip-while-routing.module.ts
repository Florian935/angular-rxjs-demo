import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkipWhileComponent } from './skip-while.component';

const routes: Routes = [{ path: '', component: SkipWhileComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SkipWhileRoutingModule {}
