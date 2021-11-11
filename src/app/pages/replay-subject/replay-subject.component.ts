import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
    selector: 'app-replay-subject',
    templateUrl: './replay-subject.component.html',
    styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const replaySubject$ = new ReplaySubject<number>(2, 1000);
        replaySubject$.next(1);

        replaySubject$.subscribe((data: number) => {
            console.log('Observer 1', data);
        });

        replaySubject$.next(2);
        replaySubject$.next(3);
        replaySubject$.next(4);
        // ! replaySubject replay all emitted data, even in the case
        // ! of an error occured
        // replaySubject$.error('Error occured ');

        setTimeout(() => {
            replaySubject$.subscribe((data: number) => {
                console.log('Observer 2', data);
            });
            replaySubject$.next(5);
        }, 3000);
    }
}
