import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferTimeComponent } from './buffer-time.component';

const routes: Routes = [{ path: '', component: BufferTimeComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BufferTimeRoutingModule {}
