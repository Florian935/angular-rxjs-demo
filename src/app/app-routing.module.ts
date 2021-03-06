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
        path: 'behavior-subject',
        loadChildren: () =>
            import('./pages/behavior-subject/behavior-subject.module').then(
                (m) => m.BehaviorSubjectModule
            ),
    },
    {
        path: 'replay-subject',
        loadChildren: () =>
            import('./pages/replay-subject/replay-subject.module').then(
                (m) => m.ReplaySubjectModule
            ),
    },
    {
        path: 'void-subject',
        loadChildren: () =>
            import('./pages/void-subject/void-subject.module').then(
                (m) => m.VoidSubjectModule
            ),
    },
    {
        path: 'async-subject',
        loadChildren: () =>
            import('./pages/async-subject/async-subject.module').then(
                (m) => m.AsyncSubjectModule
            ),
    },
    {
        path: 'connectable',
        loadChildren: () =>
            import('./pages/connectable/connectable.module').then(
                (m) => m.ConnectableModule
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
