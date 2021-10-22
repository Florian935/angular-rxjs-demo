import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mapTo, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-map-to',
    templateUrl: './map-to.component.html',
    styleUrls: ['./map-to.component.scss'],
})
export class MapToComponent implements OnInit {
    data$?: Observable<Array<string>>;

    constructor() {}

    ngOnInit(): void {
        this.data$ = of(1, 2, 3).pipe(mapTo('a'), toArray());
    }
}
