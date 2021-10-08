import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferCountComponent } from './buffer-count.component';

const routes: Routes = [{ path: '', component: BufferCountComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BufferCountRoutingModule {}
