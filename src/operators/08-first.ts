import {fromEvent, Observable, Observer} from 'rxjs';
import {first, map, tap} from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(console.log),
    map(({clientX, clientY}) => ({clientX, clientY})),
    first(event => event.clientY >= 150)
).subscribe(observer);
