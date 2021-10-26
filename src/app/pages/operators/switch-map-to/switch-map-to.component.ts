import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { switchMapTo, tap } from 'rxjs/operators';

@Component({
    selector: 'app-switch-map-to',
    templateUrl: './switch-map-to.component.html',
    styleUrls: ['./switch-map-to.component.scss'],
})
export class SwitchMapToComponent implements OnInit {
    @ViewChild('intervalButton', { static: true }) intervalButton!: ElementRef;
    intervalButton$?: Observable<Event>;
    interval$?: Observable<number>;
    interval: Array<number> = [];

    constructor() {}

    ngOnInit(): void {
        this.intervalButton$ = fromEvent(
            this.intervalButton.nativeElement,
            'click'
        );

        this.interval$ = this.intervalButton$.pipe(
            tap((event: Event) => {
                this.interval = [];
            }),
            switchMapTo(interval(1000)),
            tap((interval: number) => {
                this.interval = [...this.interval, interval];
            })
        );
    }
}
