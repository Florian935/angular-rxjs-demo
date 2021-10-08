import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { bufferTime, tap } from 'rxjs/operators';

@Component({
    selector: 'app-buffer-time',
    templateUrl: './buffer-time.component.html',
    styleUrls: ['./buffer-time.component.scss'],
})
export class BufferTimeComponent implements OnInit {
    intervalData: Array<number> = [];
    interval$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.interval$ = interval(1000).pipe(
            bufferTime(2000),
            tap((datas: Array<number>) => {
                console.log(datas);
                this.intervalData = [...this.intervalData, ...datas];
            })
        );

        // ! We can also set the `bufferCreationInterval` (second parameter).
        // ! If this parameter is given, open a new buffer every
        // !`bufferCreationInterval`
        // this.interval$ = interval(4000, 1000).pipe(
        //     bufferTime(2000),
        //     tap((datas: Array<number>) => {
        //         console.log(datas);
        //         this.intervalData = [...this.intervalData, ...datas];
        //     })
        // );
    }
}
