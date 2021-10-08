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
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OperatorsRoutingModule {}
