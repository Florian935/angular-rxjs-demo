import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
    selector: 'app-share',
    templateUrl: './share.component.html',
    styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
    source$?: Observable<number>;

    constructor() {}

    ngOnInit(): void {
        this.source$ = interval(1000).pipe(share());

        this.source$.subscribe(console.log);

        setTimeout(() => {
            this.source$?.subscribe(console.log);
        }, 2000);
    }
}
