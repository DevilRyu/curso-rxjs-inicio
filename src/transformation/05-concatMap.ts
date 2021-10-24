import {fromEvent, interval, Observable} from 'rxjs';
import {concatMap, take} from "rxjs/operators";

const interval$: Observable<number> = interval(500).pipe(take(3));
const click$: Observable<any> = fromEvent(document, 'click');

click$.pipe(
    concatMap(() => interval$)
).subscribe(console.log);
