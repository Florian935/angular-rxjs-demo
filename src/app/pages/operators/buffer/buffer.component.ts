import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';
import { buffer, tap } from 'rxjs/operators';

@Component({
    selector: 'app-buffer',
    templateUrl: './buffer.component.html',
    styleUrls: ['./buffer.component.scss'],
})
export class BufferComponent implements AfterViewInit, OnDestroy {
    @ViewChild('showData', { static: true }) showDataButton!: ElementRef;
    showDataButton$!: Observable<Event>;
    intervalData: Array<number> = [];
    intervalSubscription?: Subscription;
    actualBufferedData: Array<number> = [];

    constructor() {}

    ngAfterViewInit(): void {
        this.showDataButton$ = fromEvent(
            this.showDataButton.nativeElement,
            'click'
        );
    }

    startInterval(): void {
        this.intervalSubscription = interval(1000)
            .pipe(buffer(this.showDataButton$))
            .subscribe((datas: Array<number>) => {
                this.intervalData = [...this.intervalData, ...datas];
                this.actualBufferedData = datas;
            });
    }

    ngOnDestroy(): void {
        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
        }
    }
}
