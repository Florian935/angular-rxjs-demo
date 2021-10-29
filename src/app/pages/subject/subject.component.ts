import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        // this.observable();
        this.subjectAsObservable();
    }

    private observable(): void {
        const observable$ = new Observable<number>((observer) => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        });

        const observer1: Observer<number> = {
            next: (data: number) => {
                console.log('Observer 1 ' + data);
            },
            error: (error: any) => {
                console.error(error);
            },
            complete: () => {
                console.log('Observer 1 complete');
            },
        };

        const observer2: Observer<number> = {
            next: (data: number) => {
                console.log('Observer 2 ' + data);
            },
            error: (error: any) => {
                console.error(error);
            },
            complete: () => {
                console.log('Observer 2 complete');
            },
        };

        observable$.subscribe(observer1);
        observable$.subscribe(observer2);
    }

    private subjectAsObservable(): void {
        // const observable$ = of(1, 2, 3, 4, 5);
        const subject$ = new Subject<number>();

        const observer1: Observer<number> = {
            next: (data: number) => {
                console.log('Observer 1 ' + data);
            },
            error: (error: any) => {
                console.error(error);
            },
            complete: () => {
                console.log('Observer 1 complete');
            },
        };

        const observer2: Observer<number> = {
            next: (data: number) => {
                console.log('Observer 2 ' + data);
            },
            error: (error: any) => {
                console.error(error);
            },
            complete: () => {
                console.log('Observer 2 complete');
            },
        };

        subject$.subscribe(observer1);
        subject$.subscribe(observer2);
        // observable$.subscribe(subject$);
        subject$.next(1);
        subject$.next(2);
        subject$.next(3);
    }
}
