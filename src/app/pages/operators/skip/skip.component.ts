import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { skip, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-skip',
    templateUrl: './skip.component.html',
    styleUrls: ['./skip.component.scss'],
})
export class SkipComponent implements OnInit {
    data$!: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3, 4, 5).pipe(skip(3), toArray());
    }
}
