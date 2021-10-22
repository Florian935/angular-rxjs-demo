import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { single } from 'rxjs/operators';

interface Person {
    name: string;
}

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
    data$?: Observable<number>;
    dataWithPredicate$?: Observable<Person>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1).pipe(single());

        this.dataWithPredicate$ = of(
            { name: 'Toto' },
            { name: 'John' },
            { name: 'Doe' }
        ).pipe(single((person: Person) => person.name.startsWith('T')));
    }
}
