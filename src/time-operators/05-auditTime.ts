import {fromEvent, Observable} from 'rxjs';
import {auditTime, map, tap} from 'rxjs/operators';

const click$:Observable<PointerEvent> = fromEvent<PointerEvent>(document,'click');

click$.pipe(
    tap((val:PointerEvent) => console.log('tap: ', val.x)),
    auditTime(5000),
    map(({x}) => x)
).subscribe(console.log);
