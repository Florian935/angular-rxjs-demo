import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-merge-map',
    templateUrl: './merge-map.component.html',
    styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
    data$?: Observable<string>;
    data: Array<string> = [];

    constructor() {}

    ngOnInit(): void {
        this.data$ = of('a', 'b', 'c').pipe(
            mergeMap((letter: string) =>
                interval(1000).pipe(
                    map((interval: number) => letter + interval),
                    tap((value: string) => {
                        this.data = [...this.data, value];
                    })
                )
            )
        );
    }
}
