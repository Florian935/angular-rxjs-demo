import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColdObservableComponent } from './cold-observable.component';

const routes: Routes = [{ path: '', component: ColdObservableComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ColdObservableRoutingModule {}
