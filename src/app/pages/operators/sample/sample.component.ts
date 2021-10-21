import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { sample, tap } from 'rxjs/operators';

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
    @ViewChild('click', { static: true }) button!: ElementRef;
    button$?: Observable<Event>;
    interval$?: Observable<number>;
    intervalData: Array<number> = [];

    constructor() {}

    ngOnInit(): void {
        this.button$ = fromEvent(this.button.nativeElement, 'click');

        this.interval$ = interval(1000).pipe(
            tap((value: number) => {
                this.intervalData = [...this.intervalData, value];
            }),
            sample(this.button$)
        );
    }
}
