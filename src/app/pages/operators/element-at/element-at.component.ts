import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { elementAt } from 'rxjs/operators';

@Component({
    selector: 'app-element-at',
    templateUrl: './element-at.component.html',
    styleUrls: ['./element-at.component.scss'],
})
export class ElementAtComponent implements OnInit {
    data$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3, 4, 5).pipe(elementAt(3, -1));
    }
}
