import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { skipWhile, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-skip-while',
    templateUrl: './skip-while.component.html',
    styleUrls: ['./skip-while.component.scss'],
})
export class SkipWhileComponent implements OnInit {
    data$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3, 4, 5).pipe(
            skipWhile((data: number) => data < 3),
            toArray()
        );
    }
}
