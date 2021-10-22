import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementAtComponent } from './element-at.component';

const routes: Routes = [{ path: '', component: ElementAtComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ElementAtRoutingModule {}
