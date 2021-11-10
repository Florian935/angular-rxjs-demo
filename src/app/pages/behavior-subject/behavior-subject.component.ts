import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Component({
    selector: 'app-behavior-subject',
    templateUrl: './behavior-subject.component.html',
    styleUrls: ['./behavior-subject.component.scss'],
})
export class BehaviorSubjectComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        let behaviorSubject$ = new BehaviorSubject<number>(0);

        behaviorSubject$.subscribe(console.log);

        behaviorSubject$.next(1);

        behaviorSubject$.subscribe(console.log);

        behaviorSubject$.next(2);
    }
}
