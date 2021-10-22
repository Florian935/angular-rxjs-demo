import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
    selector: 'app-last',
    templateUrl: './last.component.html',
    styleUrls: ['./last.component.scss'],
})
export class LastComponent implements OnInit {
    data$?: Observable<number>;
    dataWithPredicate$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3).pipe(last());
        this.dataWithPredicate$ = of(1, 2, 3).pipe(
            last((value: number) => value % 2 === 0)
        );
    }
}
