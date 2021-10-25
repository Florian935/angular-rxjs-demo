import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-switch-map',
    templateUrl: './switch-map.component.html',
    styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
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
            switchMap((event: Event) => {
                this.interval = [];

                return interval(1000);
            }),
            tap((interval: number) => {
                this.interval = [...this.interval, interval];
            })
        );
    }
}
