import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { debounce, map } from 'rxjs/operators';

@Component({
    selector: 'app-debounce',
    templateUrl: './debounce.component.html',
    styleUrls: ['./debounce.component.scss'],
})
export class DebounceComponent implements OnInit {
    @ViewChild('debounceButton', { static: true }) button!: ElementRef;
    button$?: Observable<Event>;
    clientXPosition$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.button$ = fromEvent(this.button.nativeElement, 'click');
        this.clientXPosition$ = this.button$.pipe(
            debounce(() => interval(1000)),
            map((event: Event) => (event as PointerEvent).clientX)
        );
    }
}
