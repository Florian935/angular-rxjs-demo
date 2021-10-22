import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { map, tap, throttle } from 'rxjs/operators';

@Component({
    selector: 'app-throttle',
    templateUrl: './throttle.component.html',
    styleUrls: ['./throttle.component.scss'],
})
export class ThrottleComponent implements OnInit {
    @ViewChild('button', { static: true }) button!: ElementRef;
    button$?: Observable<Event>;
    clientXPosition$?: Observable<number>;
    isFirstValue = true;
    firstValue?: number;

    constructor() {}

    ngOnInit(): void {
        this.button$ = fromEvent(this.button.nativeElement, 'click');
        this.clientXPosition$ = this.button$.pipe(
            throttle((event: Event) => interval(1000), {
                leading: true,
                trailing: true,
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
