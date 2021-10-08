import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferToggleComponent } from './buffer-toggle.component';

const routes: Routes = [{ path: '', component: BufferToggleComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BufferToggleRoutingModule {}
