import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { bufferToggle, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-buffer-toggle',
    templateUrl: './buffer-toggle.component.html',
    styleUrls: ['./buffer-toggle.component.scss'],
})
export class BufferToggleComponent implements AfterViewInit {
    @ViewChild('startBuffer', { static: true }) startBuffer!: ElementRef;
    @ViewChild('stopBuffer', { static: true }) stopBuffer!: ElementRef;
    startBuffer$?: Observable<Event>;
    stopBuffer$?: Observable<Event>;
    interval$?: Observable<number>;
    intervalData: Array<number> = [];
    intervalBufferedData: Array<number> = [];

    constructor() {}

    ngAfterViewInit(): void {
        this.startBuffer$ = fromEvent(this.startBuffer.nativeElement, 'click');
        this.stopBuffer$ = fromEvent(this.stopBuffer.nativeElement, 'click');
        this.interval$ = interval(1000).pipe(
            tap((data: number) => {
                this.intervalData = [...this.intervalData, data];
            }),
            bufferToggle(
                this.startBuffer$,
                (event: Event) => this.stopBuffer$!
            ),
            tap((data: Array<number>) => {
                this.intervalBufferedData = [...data];
            }),
            switchMap((datas: Array<number>) => datas)
        );
    }
}
