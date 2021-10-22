import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { concatMapTo, map, take, tap } from 'rxjs/operators';

@Component({
    selector: 'app-concat-map-to',
    templateUrl: './concat-map-to.component.html',
    styleUrls: ['./concat-map-to.component.scss'],
})
export class ConcatMapToComponent implements OnInit {
    letters$?: Observable<number>;
    data: Array<number> = [];

    constructor() {}

    ngOnInit(): void {
        this.letters$ = of('a', 'b', 'c').pipe(
            concatMapTo(
                interval(1000).pipe(
                    map((interval: number) => interval),
                    tap((value: number) => {
                        this.data = [...this.data, value];
                    }),
                    take(3)
                )
            )
        );
    }
}
