import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { bufferWhen, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-buffer-when',
    templateUrl: './buffer-when.component.html',
    styleUrls: ['./buffer-when.component.scss'],
})
export class BufferWhenComponent implements AfterViewInit {
    @ViewChild('showBuffer', { static: true }) showBufferButton!: ElementRef;
    intervalData: Array<number> = [];
    actualBufferedData: Array<number> = [];
    interval$?: Observable<number>;

    constructor() {}

    ngAfterViewInit(): void {
        this.interval$ = interval(1000).pipe(
            tap((data: number) => {
                this.intervalData = [...this.intervalData, data];
            }),
            bufferWhen(() =>
                fromEvent(this.showBufferButton.nativeElement, 'click')
            ),
            switchMap((data: Array<number>) => {
                this.actualBufferedData = [...data];
                return data;
            })
        );
    }
}
