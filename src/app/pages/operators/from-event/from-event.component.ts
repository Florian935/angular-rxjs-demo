import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-from-event',
    templateUrl: './from-event.component.html',
    styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
    clickClientXTracker$?: Observable<number>;
    clickClientXTrackerArray: Array<number> = [];
    wheelClientXTracker$?: Observable<number>;
    wheelClientXTrackerArray: Array<number> = [];
    mouseenterClientXTracker$?: Observable<number>;
    mouseenterClientXTrackerArray: Array<number> = [];

    constructor() {}

    ngAfterViewInit(): void {
        this.clickClientXTracker$ = fromEvent(
            document.getElementById('click-button')!,
            'click'
        ).pipe(
            map((event: Event) => (event as PointerEvent).clientX),
            tap((clientX: number) => {
                this.clickClientXTrackerArray = [
                    ...this.clickClientXTrackerArray,
                    clientX,
                ];
            })
        );

        this.wheelClientXTracker$ = fromEvent(
            document.getElementById('wheel-button')!,
            'wheel'
        ).pipe(
            map((event: Event) => (event as WheelEvent).clientX),
            tap((clientX: number) => {
                this.wheelClientXTrackerArray = [
                    ...this.wheelClientXTrackerArray,
                    clientX,
                ];
            })
        );

        this.mouseenterClientXTracker$ = fromEvent(
            document.getElementById('mouseenter-button')!,
            'mouseenter'
        ).pipe(
            map((event: Event) => (event as MouseEvent).clientX),
            tap((clientX: number) => {
                this.mouseenterClientXTrackerArray = [
                    ...this.mouseenterClientXTrackerArray,
                    clientX,
                ];
            })
        );
    }
}
