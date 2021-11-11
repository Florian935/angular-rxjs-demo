import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Component({
    selector: 'app-retry',
    templateUrl: './retry.component.html',
    styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const source$ = of(1, 2, 3).pipe(
            map((value: number) => {
                if (value === 3) {
                    throw 'error';
                }

                return value;
            }),
            retry(2),
            catchError((error: string, caught: Observable<number>) => {
                return of(10, 20, 30);
            })
        );

        source$.subscribe(console.log);
    }
}
