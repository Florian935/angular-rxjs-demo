import { Component, OnInit } from '@angular/core';
import { interval, of, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-fork-join',
    templateUrl: './fork-join.component.html',
    styleUrls: ['./fork-join.component.scss'],
})
export class ForkJoinComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const source$ = interval(1000);
        const multiplyBy2$ = (value: number) => of(value * 2);
        const multiplyBy3$ = (value: number) => of(value * 3);

        source$
            .pipe(
                switchMap((value: number) => {
                    return forkJoin([multiplyBy2$(value), multiplyBy3$(value)]);
                })
            )
            .subscribe(([resultBy2, resultBy3]) =>
                console.log(resultBy2, resultBy3)
            );
    }
}
