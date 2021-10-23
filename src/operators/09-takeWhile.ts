import {fromEvent, Observable, Observer} from 'rxjs';
import {map, takeWhile} from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    // takeWhile(({y}) => y <= 150)
    takeWhile(({y}) => y <= 150, true)
).subscribe(observer);
