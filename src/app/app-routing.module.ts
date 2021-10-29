import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'operators',
        loadChildren: () =>
            import('./pages/operators/operators.module').then(
                (m) => m.OperatorsModule
            ),
    },
    {
        path: 'subject',
        loadChildren: () =>
            import('./pages/subject/subject.module').then(
                (m) => m.SubjectModule
            ),
    },
    {
        path: 'cold-observable',
        loadChildren: () =>
            import('./pages/cold-observable/cold-observable.module').then(
                (m) => m.ColdObservableModule
            ),
    },
    {
        path: '',
        redirectTo: 'operators',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'operators',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
