import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-distinct-until-changed',
    templateUrl: './distinct-until-changed.component.html',
    styleUrls: ['./distinct-until-changed.component.scss'],
})
export class DistinctUntilChangedComponent implements OnInit {
    data$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 2, 2, 3, 4, 3, 3, 4).pipe(
            distinctUntilChanged(),
            toArray()
        );
    }
}
