import { Component, OnInit } from '@angular/core';
import { connectable, ConnectableObservable, interval, Observable } from 'rxjs';

@Component({
    selector: 'app-connectable',
    templateUrl: './connectable.component.html',
    styleUrls: ['./connectable.component.scss'],
})
export class ConnectableComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const source$: ReturnType<typeof connectable> = connectable(
            interval(1000)
        );

        source$.subscribe(console.log);

        setTimeout(() => {
            source$.subscribe(console.log);
        }, 3000);

        source$.connect();
    }
}
