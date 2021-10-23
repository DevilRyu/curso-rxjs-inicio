import {fromEvent, interval, Observable} from 'rxjs';
import {sample} from 'rxjs/operators';

const interval$:Observable<number> = interval(500);

const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);
