import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { takeUntil, tap, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-take-until',
    templateUrl: './take-until.component.html',
    styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements OnInit {
    @ViewChild('stopInterval', { static: true })
    stopIntervalButton!: ElementRef;
    stopIntervalButton$?: Observable<Event>;
    intervalData: Array<number> = [];
    intervalData$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.stopIntervalButton$ = fromEvent(
            this.stopIntervalButton.nativeElement,
            'click'
        );

        this.intervalData$ = interval(1000).pipe(
            tap((interval: number) => {
                this.intervalData = [...this.intervalData, interval];
            }),
            takeUntil(this.stopIntervalButton$),
            toArray()
        );
    }
}
