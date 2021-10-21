import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinct, toArray } from 'rxjs/operators';

interface Person {
    age: number;
    name: string;
}

@Component({
    selector: 'app-distinct',
    templateUrl: './distinct.component.html',
    styleUrls: ['./distinct.component.scss'],
})
export class DistinctComponent implements OnInit {
    persons$?: Observable<Array<Person>>;
    data$?: Observable<Array<number>>;

    constructor() {}

    ngOnInit(): void {
        this.persons$ = of(
            { age: 4, name: 'Toto' },
            { age: 7, name: 'John' },
            { age: 5, name: 'Toto' }
        ).pipe(
            distinct((person: Person) => person.name),
            toArray()
        );

        this.data$ = of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
            distinct(),
            toArray()
        );
    }
}
