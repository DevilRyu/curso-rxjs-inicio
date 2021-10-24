import {fromEvent, interval, Observable, Observer, of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {catchError, concatMap, map, pluck, take, tap, mergeMap} from "rxjs/operators";

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: (err: any) => console.warn('error en subs: ', err),
    complete: () => console.info('complete')
};
