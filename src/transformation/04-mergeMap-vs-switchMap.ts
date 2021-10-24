import {fromEvent, interval, Observable} from 'rxjs';
import {mergeMap, switchMap} from "rxjs/operators";

const click$: Observable<any> = fromEvent(document, 'click');
const interval$: Observable<number> = interval(1000);

click$.pipe(
    mergeMap(() => interval$),
    switchMap(() => interval$)
).subscribe(console.log);

