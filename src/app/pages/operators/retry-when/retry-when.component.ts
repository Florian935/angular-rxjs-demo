import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, retryWhen, tap } from 'rxjs/operators';

@Component({
    selector: 'app-retry-when',
    templateUrl: './retry-when.component.html',
    styleUrls: ['./retry-when.component.scss'],
})
export class RetryWhenComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const usersData = {
            responseStatus: '500',
            users: [
                { id: 1, name: 'Flo' },
                { id: 2, name: 'Flo2' },
            ],
        };

        const source$ = of(...usersData.users).pipe(
            delay(950),
            tap((user) => {
                if (!usersData.responseStatus.startsWith('2')) {
                    throw usersData.responseStatus;
                }
            }),
            retryWhen((error: Observable<string>) => {
                return error.pipe(
                    tap((status: string) => {
                        console.log('retrying ...');
                    })
                );
            })
        );

        source$.subscribe({
            next: (user) => console.log(user),
            error: (error: string) => console.log(error),
        });

        setTimeout(() => {
            usersData.responseStatus = '200';
        }, 2000);
    }
}
