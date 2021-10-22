import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { asyncScheduler, fromEvent, interval, Observable } from 'rxjs';
import { map, tap, throttleTime } from 'rxjs/operators';

@Component({
    selector: 'app-throttle-time',
    templateUrl: './throttle-time.component.html',
    styleUrls: ['./throttle-time.component.scss'],
})
export class ThrottleTimeComponent implements OnInit {
    @ViewChild('button', { static: true }) button!: ElementRef;
    button$?: Observable<Event>;
    clientXPosition$?: Observable<number>;
    isFirstValue = true;
    firstValue?: number;

    constructor() {}

    ngOnInit(): void {
        this.button$ = fromEvent(this.button.nativeElement, 'click');
        this.clientXPosition$ = this.button$.pipe(
            throttleTime(1000, asyncScheduler, {
                leading: true,
                trailing: false,
            }),
            tap((event: Event) => {
                if (this.isFirstValue) {
                    this.firstValue = (event as PointerEvent).clientX;
                    this.isFirstValue = false;
                }
            }),
            map((event: Event) => (event as PointerEvent).clientX)
        );
    }
}
