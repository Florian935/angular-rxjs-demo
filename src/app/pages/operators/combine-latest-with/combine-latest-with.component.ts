import {
    AfterViewInit,
    Component,
    ElementRef,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { combineLatestWith, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-combine-latest-with',
    templateUrl: './combine-latest-with.component.html',
    styleUrls: ['./combine-latest-with.component.scss'],
})
export class CombineLatestWithComponent implements AfterViewInit {
    @ViewChild('input1', { static: true })
    private _input1!: ElementRef<HTMLInputElement>;
    @ViewChild('input2', { static: true })
    private _input2!: ElementRef<HTMLInputElement>;
    combinedLatestInputs$!: Observable<string>;
    data = new Array<string>();

    constructor() {}

    ngAfterViewInit(): void {
        const input1$: Observable<Event> = fromEvent(
            this._input1.nativeElement,
            'change'
        );
        const input2$: Observable<Event> = fromEvent(
            this._input2.nativeElement,
            'change'
        );

        this.combinedLatestInputs$ = input1$.pipe(
            combineLatestWith(input2$),
            map(
                ([input1Event, input2Event]) =>
                    `${(<HTMLInputElement>input1Event.target).value}${
                        (<HTMLInputElement>input2Event.target).value
                    }`
            ),
            tap((concatenedInputsValue: string) => {
                this.data = [...this.data, concatenedInputsValue];
            })
        );
    }
}
