import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { skipUntil, tap } from 'rxjs/operators';

@Component({
    selector: 'app-skip-until',
    templateUrl: './skip-until.component.html',
    styleUrls: ['./skip-until.component.scss'],
})
export class SkipUntilComponent implements OnInit {
    @ViewChild('startEmitButton', { static: true })
    startEmitButton!: ElementRef;
    startEmitButton$?: Observable<Event>;
    interval$?: Observable<number>;
    intervalData: Array<number> = [];

    constructor() {}

    ngOnInit(): void {
        this.startEmitButton$ = fromEvent(
            this.startEmitButton.nativeElement,
            'click'
        );
        this.interval$ = interval(1000).pipe(
            tap((data: number) => {
                this.intervalData = [...this.intervalData, data];
            }),
            skipUntil(this.startEmitButton$)
        );
    }
}
