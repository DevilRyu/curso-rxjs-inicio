import {fromEvent, Observable, of, interval} from 'rxjs';
import {map, takeUntil, mergeMap, take} from "rxjs/operators";

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)// .subscribe(observer);

const pointerdown$: Observable<any> = fromEvent(document, 'pointerdown');
const pointerup$: Observable<any> = fromEvent(document, 'pointerup');
const interval$: Observable<any> = interval();

pointerdown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(pointerup$)
    ))
).subscribe(console.log);
