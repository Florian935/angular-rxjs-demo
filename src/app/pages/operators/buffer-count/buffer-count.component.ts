import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { bufferCount, tap } from 'rxjs/operators';

@Component({
    selector: 'app-buffer-count',
    templateUrl: './buffer-count.component.html',
    styleUrls: ['./buffer-count.component.scss'],
})
export class BufferCountComponent implements OnInit {
    intervalData: Array<number> = [];
    interval$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.interval$ = interval(1000).pipe(
            bufferCount(2),
            tap((datas: Array<number>) => {
                this.intervalData = [...this.intervalData, ...datas];
            })
        );
    }
}
