import {fromEvent, Observable} from 'rxjs';
import {sampleTime, map} from 'rxjs/operators';

const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y}))
).subscribe(console.log)
