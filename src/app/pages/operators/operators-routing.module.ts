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
                path: '',
                loadChildren: () =>
                    import('./take-last/take-last.module').then(
                        (m) => m.TakeLastModule
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
