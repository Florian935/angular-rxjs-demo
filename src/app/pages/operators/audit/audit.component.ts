import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { audit, map } from 'rxjs/operators';

@Component({
    selector: 'app-audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.scss'],
})
export class AuditComponent implements OnInit {
    @ViewChild('button', { static: true }) button!: ElementRef;
    button$?: Observable<Event>;
    clientXPosition$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.button$ = fromEvent(this.button.nativeElement, 'click');
        this.clientXPosition$ = this.button$.pipe(
            audit((event: Event) => interval(1000)),
            map((event: Event) => (event as PointerEvent).clientX)
        );
    }
}
