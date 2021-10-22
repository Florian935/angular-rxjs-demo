import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { concatMap, map, take, tap } from 'rxjs/operators';

@Component({
    selector: 'app-concat-map',
    templateUrl: './concat-map.component.html',
    styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
    letters$?: Observable<string>;
    data: Array<string> = [];

    constructor() {}

    ngOnInit(): void {
        this.letters$ = of('a', 'b', 'c').pipe(
            concatMap((letter: string) =>
                interval(1000).pipe(
                    map((interval: number) => letter + interval),
                    tap((value: string) => {
                        this.data = [...this.data, value];
                    }),
                    take(3)
                )
            )
        );
    }
}
