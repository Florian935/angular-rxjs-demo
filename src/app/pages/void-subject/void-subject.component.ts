import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-void-subject',
    templateUrl: './void-subject.component.html',
    styleUrls: ['./void-subject.component.scss'],
})
export class VoidSubjectComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const voidSubject$ = new Subject<void>();

        voidSubject$.subscribe(() => {
            console.log('One second has passed');
        });

        setTimeout(() => {
            voidSubject$.next();
        }, 1000);
    }
}
