import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

@Component({
    selector: 'app-audit-time',
    templateUrl: './audit-time.component.html',
    styleUrls: ['./audit-time.component.scss'],
})
export class AuditTimeComponent implements OnInit {
    @ViewChild('button', { static: true }) button!: ElementRef;
    button$?: Observable<Event>;
    clientXPosition$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.button$ = fromEvent(this.button.nativeElement, 'click');
        this.clientXPosition$ = this.button$.pipe(
            auditTime(1000),
            map((event: Event) => (event as PointerEvent).clientX)
        );
    }
}
