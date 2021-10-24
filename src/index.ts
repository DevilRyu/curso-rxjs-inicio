import {fromEvent, interval, Observable, Observer} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {concatMap, exhaustMap, take} from "rxjs/operators";

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: (err: any) => console.warn('error en subs: ', err),
    complete: () => console.info('complete')
};

const interval$: Observable<number> = interval(500).pipe(take(3));
const click$: Observable<any> = fromEvent(document, 'click');

click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log);

