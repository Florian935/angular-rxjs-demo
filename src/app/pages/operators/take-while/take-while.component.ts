import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { takeWhile, tap, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-take-while',
    templateUrl: './take-while.component.html',
    styleUrls: ['./take-while.component.scss'],
})
export class TakeWhileComponent implements OnInit {
    data: Array<number> = [];
    dataTaken$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.dataTaken$ = interval(1000).pipe(
            tap((interval: number) => {
                this.data = [...this.data, interval];
            }),
            takeWhile((data: number) => data < 3),
            toArray()
        );
    }
}
