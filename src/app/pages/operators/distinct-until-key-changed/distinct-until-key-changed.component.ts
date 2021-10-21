import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinctUntilKeyChanged, toArray } from 'rxjs/operators';

interface Person {
    age: number;
    name: string;
}

@Component({
    selector: 'app-distinct-until-key-changed',
    templateUrl: './distinct-until-key-changed.component.html',
    styleUrls: ['./distinct-until-key-changed.component.scss'],
})
export class DistinctUntilKeyChangedComponent implements OnInit {
    data$?: Observable<Array<Person>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(
            { age: 10, name: 'Toto' },
            { age: 20, name: 'Toto' },
            { age: 30, name: 'Doe' },
            { age: 40, name: 'Toto' },
            { age: 50, name: 'Doe' },
            { age: 60, name: 'Doe' },
            { age: 70, name: 'Toto' }
        ).pipe(distinctUntilKeyChanged('name'), toArray());
    }
}
