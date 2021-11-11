import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-catch-error',
    templateUrl: './catch-error.component.html',
    styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent implements OnInit {
    source$?: Observable<string>;
    sourceData: Array<string> = [];

    constructor() {}

    ngOnInit(): void {
        this.source$ = of('1', '2', '3', '4', '5').pipe(
            map((value: string) => {
                if (value === '4') {
                    throw new Error('An error occured');
                }

                return value;
            }),
            catchError((error: Error, caughtObservable: Observable<string>) => {
                // !  is the source observable, in case you'd like
                // !  to "retry" that observable by returning it again
                return of('I', 'II', 'III', 'IV', 'V');
            }),
            tap((value: string) => {
                this.sourceData = [...this.sourceData, value];
            })
        );
    }
}
