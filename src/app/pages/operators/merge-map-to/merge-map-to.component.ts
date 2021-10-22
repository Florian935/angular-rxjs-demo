import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { mergeMapTo, tap } from 'rxjs/operators';

@Component({
    selector: 'app-merge-map-to',
    templateUrl: './merge-map-to.component.html',
    styleUrls: ['./merge-map-to.component.scss'],
})
export class MergeMapToComponent implements OnInit {
    data$?: Observable<number>;
    data: Array<number> = [];

    constructor() {}

    ngOnInit(): void {
        this.data$ = of('a', 'b', 'c').pipe(
            mergeMapTo(
                interval(1000).pipe(
                    tap((interval: number) => {
                        this.data = [...this.data, interval];
                    })
                )
            )
        );
    }
}
