import {Observable, merge, fromEvent} from 'rxjs';
import {pluck} from "rxjs/operators";

const keyup$:Observable<any> = fromEvent(document, 'keyup');
const click$:Observable<any> = fromEvent(document, 'click');

merge(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type')),
).subscribe(console.log);
