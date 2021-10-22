import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

@Component({
    selector: 'app-ignore-elements',
    templateUrl: './ignore-elements.component.html',
    styleUrls: ['./ignore-elements.component.scss'],
})
export class IgnoreElementsComponent implements OnInit {
    data$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3, 4, 5).pipe(ignoreElements());
    }
}
