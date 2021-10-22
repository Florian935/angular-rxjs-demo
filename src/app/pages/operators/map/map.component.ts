import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

interface Person {
    age: number;
}

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
    data$?: Observable<Array<Person>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3).pipe(
            map((value: number) => {
                return { age: value };
            }),
            toArray()
        );
    }
}
