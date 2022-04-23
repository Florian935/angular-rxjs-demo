import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import {
    concatAll,
    fromEvent,
    interval,
    map,
    Observable,
    take,
    tap,
    toArray,
} from 'rxjs';

@Component({
    selector: 'app-concat-all',
    templateUrl: './concat-all.component.html',
    styleUrls: ['./concat-all.component.scss'],
})
export class ConcatAllComponent implements AfterViewInit {
    @ViewChild('button', { static: true })
    private _button!: ElementRef<HTMLInputElement>;
    private _click$!: Observable<Event>;
    private _orderClick = 0;
    private _emissionNumber = 0;
    data = new Array<string>();
    concatenedClick$!: Observable<string>;
    queuedClicks = new Array<string>();

    constructor() {}

    ngAfterViewInit(): void {
        this._click$ = fromEvent(this._button.nativeElement, 'click').pipe(
            tap((pointerEvent: Event) => {
                this._orderClick++;
                this.queuedClicks = [
                    ...this.queuedClicks,
                    `Click ${this._orderClick}`,
                ];
            })
        );

        this.concatenedClick$ = this._click$.pipe(
            map((pointerEvent: Event) =>
                interval(1000).pipe(
                    take(1),
                    tap((value: number) => this._emissionNumber++),
                    map((value: number) => `Click ${this._emissionNumber}`),
                    tap((text: string) => {
                        this.data = [...this.data, text];
                        this.queuedClicks = this.queuedClicks.filter(
                            (queuedClick: string) =>
                                !queuedClick.includes(
                                    `Click ${this._emissionNumber}`
                                )
                        );
                    })
                )
            ),
            concatAll()
        );
    }
}
