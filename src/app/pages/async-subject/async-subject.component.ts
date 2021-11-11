import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
    selector: 'app-async-subject',
    templateUrl: './async-subject.component.html',
    styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        // ! Emit only a value when the subject complete.
        // ! The emitted value is the last value emitted.
        const asyncSubject$ = new AsyncSubject<number>();

        asyncSubject$.subscribe((data: number) => {
            console.log('Observer 1', data);
        });

        asyncSubject$.next(1);
        asyncSubject$.next(2);
        asyncSubject$.next(3);

        setTimeout(() => {
            asyncSubject$.subscribe((data: number) => {
                console.log('Observer 2', data);
            });
        }, 2000);

        asyncSubject$.next(4);
        asyncSubject$.complete();

        // ! In case of error, no value is emitted by the
        // ! asyncSubject
        // asyncSubject$.error('Error raised');
    }
}
