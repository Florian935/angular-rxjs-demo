import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { takeLast, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-take-last',
    templateUrl: './take-last.component.html',
    styleUrls: ['./take-last.component.scss'],
})
export class TakeLastComponent implements OnInit {
    data$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3, 4).pipe(takeLast(3), toArray());
    }
}
