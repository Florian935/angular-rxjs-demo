import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { skipLast, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-skip-last',
    templateUrl: './skip-last.component.html',
    styleUrls: ['./skip-last.component.scss'],
})
export class SkipLastComponent implements OnInit {
    data$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3, 4, 5).pipe(skipLast(2), toArray());
    }
}
