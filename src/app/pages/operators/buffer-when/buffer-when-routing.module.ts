import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferWhenComponent } from './buffer-when.component';

const routes: Routes = [{ path: '', component: BufferWhenComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BufferWhenRoutingModule {}
