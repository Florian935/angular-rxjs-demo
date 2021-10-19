import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';

const routes: Routes = [
    {
        path: '',
        component: OperatorsComponent,
        children: [
            {
                path: 'from-event',
                loadChildren: () =>
                    import('./from-event/from-event.module').then(
                        (m) => m.FromEventModule
                    ),
            },
            {
                path: 'buffer',
                loadChildren: () =>
                    import('./buffer/buffer.module').then(
                        (m) => m.BufferModule
                    ),
            },
            {
                path: 'buffer-count',
                loadChildren: () =>
                    import('./buffer-count/buffer-count.module').then(
                        (m) => m.BufferCountModule
                    ),
            },
            {
                path: 'buffer-time',
                loadChildren: () =>
                    import('./buffer-time/buffer-time.module').then(
                        (m) => m.BufferTimeModule
                    ),
            },
            {
                path: 'buffer-toggle',
                loadChildren: () =>
                    import('./buffer-toggle/buffer-toggle.module').then(
                        (m) => m.BufferToggleModule
                    ),
            },
            {
                path: 'buffer-when',
                loadChildren: () =>
                    import('./buffer-when/buffer-when.module').then(
                        (m) => m.BufferWhenModule
                    ),
            },
            {
                path: 'take',
                loadChildren: () =>
                    import('./take/take.module').then((m) => m.TakeModule),
            },
            {
                path: 'take-last',
                loadChildren: () =>
                    import('./take-last/take-last.module').then(
                        (m) => m.TakeLastModule
                    ),
            },
            {
                path: 'take-until',
                loadChildren: () =>
                    import('./take-until/take-until.module').then(
                        (m) => m.TakeUntilModule
                    ),
            },
            {
                path: 'take-while',
                loadChildren: () =>
                    import('./take-while/take-while.module').then(
                        (m) => m.TakeWhileModule
                    ),
            },
            {
                path: 'skip',
                loadChildren: () =>
                    import('./skip/skip.module').then((m) => m.SkipModule),
            },
            {
                path: 'skip-last',
                loadChildren: () =>
                    import('./skip-last/skip-last.module').then(
                        (m) => m.SkipLastModule
                    ),
            },
            {
                path: 'skip-until',
                loadChildren: () =>
                    import('./skip-until/skip-until.module').then(
                        (m) => m.SkipUntilModule
                    ),
            },
            {
                path: 'skip-while',
                loadChildren: () =>
                    import('./skip-while/skip-while.module').then(
                        (m) => m.SkipWhileModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OperatorsRoutingModule {}
