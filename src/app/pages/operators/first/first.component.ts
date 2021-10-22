import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
    data$?: Observable<number>;
    dataWithPredicate$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3).pipe(first());
        this.dataWithPredicate$ = of(1, 2, 3).pipe(
            first((value: number) => value % 2 === 0)
        );
    }
}
