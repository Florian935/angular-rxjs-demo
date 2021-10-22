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
            {
                path: 'distinct',
                loadChildren: () =>
                    import('./distinct/distinct.module').then(
                        (m) => m.DistinctModule
                    ),
            },
            {
                path: 'distinct-until-changed',
                loadChildren: () =>
                    import(
                        './distinct-until-changed/distinct-until-changed.module'
                    ).then((m) => m.DistinctUntilChangedModule),
            },
            {
                path: 'distinct-until-key-changed',
                loadChildren: () =>
                    import(
                        './distinct-until-key-changed/distinct-until-key-changed.module'
                    ).then((m) => m.DistinctUntilKeyChangedModule),
            },
            {
                path: 'filter',
                loadChildren: () =>
                    import('./filter/filter.module').then(
                        (m) => m.FilterModule
                    ),
            },
            {
                path: 'sample',
                loadChildren: () =>
                    import('./sample/sample.module').then(
                        (m) => m.SampleModule
                    ),
            },
            {
                path: 'audit',
                loadChildren: () =>
                    import('./audit/audit.module').then((m) => m.AuditModule),
            },
            {
                path: 'audit-time',
                loadChildren: () =>
                    import('./audit-time/audit-time.module').then(
                        (m) => m.AuditTimeModule
                    ),
            },
            {
                path: 'throttle',
                loadChildren: () =>
                    import('./throttle/throttle.module').then(
                        (m) => m.ThrottleModule
                    ),
            },
            {
                path: 'throttle-time',
                loadChildren: () =>
                    import('./throttle-time/throttle-time.module').then(
                        (m) => m.ThrottleTimeModule
                    ),
            },
            {
                path: 'first',
                loadChildren: () =>
                    import('./first/first.module').then((m) => m.FirstModule),
            },
            {
                path: 'last',
                loadChildren: () =>
                    import('./last/last.module').then((m) => m.LastModule),
            },
            {
                path: 'debounce',
                loadChildren: () =>
                    import('./debounce/debounce.module').then(
                        (m) => m.DebounceModule
                    ),
            },
            {
                path: 'debounce-time',
                loadChildren: () =>
                    import('./debounce-time/debounce-time.module').then(
                        (m) => m.DebounceTimeModule
                    ),
            },
            {
                path: 'element-at',
                loadChildren: () =>
                    import('./element-at/element-at.module').then(
                        (m) => m.ElementAtModule
                    ),
            },
            {
                path: 'ignore-elements',
                loadChildren: () =>
                    import('./ignore-elements/ignore-elements.module').then(
                        (m) => m.IgnoreElementsModule
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
