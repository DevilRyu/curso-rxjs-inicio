import {fromEvent, Observable, Observer, of, interval} from 'rxjs';
import {map, takeUntil, catchError, debounceTime, mergeMap, take} from "rxjs/operators";

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: (err: any) => console.warn('error en subs: ', err),
    complete: () => console.info('complete')
};
