import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-from-event',
    templateUrl: './from-event.component.html',
    styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
    clientXTracker$?: Observable<number>;

    constructor() {}

    ngAfterViewInit(): void {
        this.clientXTracker$ = fromEvent(
            document.getElementById('click-button')!,
            'click'
        ).pipe(map((event: Event) => (event as PointerEvent).clientX));
    }
}
