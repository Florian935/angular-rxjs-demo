import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    data$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3, 4, 5, 6).pipe(
            filter((value: number) => value % 2 === 0),
            toArray()
        );
    }
}
