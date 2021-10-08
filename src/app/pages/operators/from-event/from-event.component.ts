import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-from-event',
    templateUrl: './from-event.component.html',
    styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
    /**
     * ! It may be a better idea to use static:true if the child does not
     * ! depend on any conditions. If the visibility of element changes,
     * ! then static:false may give better results.
     */
    @ViewChild('clickButton', { static: true }) clickButton!: ElementRef;
    clickClientXTracker$?: Observable<number>;
    clickClientXTrackerArray: Array<number> = [];

    @ViewChild('wheelButton', { static: true }) wheelButton!: ElementRef;
    wheelClientXTracker$?: Observable<number>;
    wheelClientXTrackerArray: Array<number> = [];

    @ViewChild('mouseenterButton', { static: true })
    mouseenterButton!: ElementRef;
    mouseenterClientXTracker$?: Observable<number>;
    mouseenterClientXTrackerArray: Array<number> = [];

    @ViewChild('keyupInput', { static: true }) keyupInput!: ElementRef;
    keyupCodeTracker$?: Observable<string>;
    keyupCodeTrackerArray: Array<string> = [];

    constructor() {}

    ngAfterViewInit(): void {
        this.buildTracker();
    }

    private buildTracker(): void {
        this.buildClickClientXTracker();
        this.buildWheelClientXTracker();
        this.buildMouseenterClientXTracker();
        this.buildKeyupCodeTracker();
    }

    private buildClickClientXTracker(): void {
        this.clickClientXTracker$ = fromEvent(
            this.clickButton.nativeElement,
            'click'
        ).pipe(
            map((event) => (event as PointerEvent).clientX),
            tap((clientX: number) => {
                this.clickClientXTrackerArray = [
                    ...this.clickClientXTrackerArray,
                    clientX,
                ];
            })
        );
    }

    private buildWheelClientXTracker(): void {
        this.wheelClientXTracker$ = fromEvent(
            this.wheelButton.nativeElement,
            'wheel'
        ).pipe(
            map((event) => (event as WheelEvent).clientX),
            tap((clientX: number) => {
                this.wheelClientXTrackerArray = [
                    ...this.wheelClientXTrackerArray,
                    clientX,
                ];
            })
        );
    }

    private buildMouseenterClientXTracker(): void {
        this.mouseenterClientXTracker$ = fromEvent(
            this.mouseenterButton.nativeElement,
            'mouseenter'
        ).pipe(
            map((event) => (event as MouseEvent).clientX),
            tap((clientX: number) => {
                this.mouseenterClientXTrackerArray = [
                    ...this.mouseenterClientXTrackerArray,
                    clientX,
                ];
            })
        );
    }

    private buildKeyupCodeTracker(): void {
        this.keyupCodeTracker$ = fromEvent(
            this.keyupInput.nativeElement,
            'keyup'
        ).pipe(
            map((event) => (event as KeyboardEvent).key),
            tap((key: string) => {
                this.keyupCodeTrackerArray = [
                    ...this.keyupCodeTrackerArray,
                    key,
                ];
            })
        );
    }
}
