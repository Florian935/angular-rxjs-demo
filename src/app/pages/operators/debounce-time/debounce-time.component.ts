import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
    selector: 'app-debounce-time',
    templateUrl: './debounce-time.component.html',
    styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements OnInit {
    @ViewChild('debounceButton', { static: true }) button!: ElementRef;
    button$?: Observable<Event>;
    clientXPosition$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.button$ = fromEvent(this.button.nativeElement, 'click');
        this.clientXPosition$ = this.button$.pipe(
            debounceTime(1000),
            map((event: Event) => (event as PointerEvent).clientX)
        );
    }
}
