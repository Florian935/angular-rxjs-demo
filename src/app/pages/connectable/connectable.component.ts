import { Component, OnInit } from '@angular/core';
import { connectable, interval } from 'rxjs';
import { ConnectableObservableLike } from 'rxjs/internal/observable/connectable';

@Component({
    selector: 'app-connectable',
    templateUrl: './connectable.component.html',
    styleUrls: ['./connectable.component.scss'],
})
export class ConnectableComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const source$: ConnectableObservableLike<number> = connectable(
            interval(1000)
        );

        source$.subscribe(console.log);

        setTimeout(() => {
            source$.subscribe(console.log);
        }, 3000);

        source$.connect();
    }
}
