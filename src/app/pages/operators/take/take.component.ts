import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-take',
    templateUrl: './take.component.html',
    styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
    data$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3, 4, 5, 6).pipe(take(5), toArray());
    }
}
