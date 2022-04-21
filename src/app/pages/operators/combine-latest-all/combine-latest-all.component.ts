import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { combineLatestAll, map, take, tap, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-combine-latest-all',
    templateUrl: './combine-latest-all.component.html',
    styleUrls: ['./combine-latest-all.component.scss'],
})
export class CombineLatestAllComponent implements OnInit {
    data = new Array<Array<string>>();
    source$?: Observable<Array<string>>;

    constructor() {}

    ngOnInit(): void {
        this.source$ = of(1, 4, 6).pipe(
            map((value: number) => interval(value * 1000)),
            combineLatestAll(
                (value1: number, value2: number, value3: number) => [
                    'a' + value1,
                    'b' + value2,
                    'c' + value3,
                ]
            ),
            tap(([value1, value2, value3]) => {
                this.data = [...this.data, [value1, value2, value3]];
            }),
            take(10)
        );
    }
}
