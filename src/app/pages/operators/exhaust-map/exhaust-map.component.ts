import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

@Component({
    selector: 'app-exhaust-map',
    templateUrl: './exhaust-map.component.html',
    styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements OnInit {
    @ViewChild('intervalButton', { static: true }) intervalButton!: ElementRef;
    intervalButton$?: Observable<Event>;
    clientXPosition$?: Observable<number>;
    data: Array<number> = [];

    constructor() {}

    ngOnInit(): void {
        this.intervalButton$ = fromEvent(
            this.intervalButton.nativeElement,
            'click'
        );

        this.clientXPosition$ = this.intervalButton$.pipe(
            exhaustMap((event: Event) =>
                interval(1000).pipe(
                    map((interval: number) => (event as PointerEvent).clientX),
                    tap((clientXPosition: number) => {
                        this.data = [...this.data, clientXPosition];
                    }),
                    take(5)
                )
            )
        );
    }
}
