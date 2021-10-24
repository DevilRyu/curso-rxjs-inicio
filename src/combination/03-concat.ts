import {of, interval, Observable, concat} from 'rxjs';
import {take} from "rxjs/operators";

const interval$: Observable<number> = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1)
).subscribe(console.log);
