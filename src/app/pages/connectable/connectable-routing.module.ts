import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectableComponent } from './connectable.component';

const routes: Routes = [{ path: '', component: ConnectableComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConnectableRoutingModule {}
