import { Component, OnInit } from '@angular/core';
import { forkJoin, interval, of, zip } from 'rxjs';
import { map, mergeMap, switchMap, zipWith } from 'rxjs/operators';

@Component({
    selector: 'app-zip-with',
    templateUrl: './zip-with.component.html',
    styleUrls: ['./zip-with.component.scss'],
})
export class ZipWithComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const source$ = interval(1000);
        const source2$ = of(1000, 1000, 1000);
        const source3$ = of(2000, 2000, 2000);

        source$
            .pipe(zipWith(source2$, source3$))
            .subscribe(([source1, source2, source3]) =>
                console.log(
                    `Source 1: ${source1}`,
                    `Source 2: ${source2}`,
                    `Source 3: ${source3}`
                )
            );
    }
}
