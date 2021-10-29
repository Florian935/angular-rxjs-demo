import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Observer, Subject } from 'rxjs';

@Component({
    selector: 'app-cold-observable',
    templateUrl: './cold-observable.component.html',
    styleUrls: ['./cold-observable.component.scss'],
})
export class ColdObservableComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const random = Math.random();

        const observable$ = new Observable((observer: Observer<number>) => {
            observer.next(random);
        });

        observable$.subscribe((value: number) => {
            console.log('Observer 1 ' + value);
        });

        observable$.subscribe((value: number) => {
            console.log('Observer 2 ' + value);
        });

        const documentEvent$ = fromEvent(document, 'click');
        documentEvent$.subscribe((event: Event) => {
            console.log((event as PointerEvent).clientX);
        });
        documentEvent$.subscribe((event: Event) => {
            console.log((event as PointerEvent).clientX);
        });

        const interval$ = interval(1000);

        const subject$ = new Subject<number>();

        interval$.subscribe(subject$);

        subject$.subscribe((interval: number) => {
            console.log('Observer 1 ' + interval);
        });

        setTimeout(() => {
            subject$.subscribe((interval: number) => {
                console.log('Observer 2 ' + interval);
            });
        }, 2000);
    }
}
