import {of, interval, Observable, Observer, combineLatestWith, from, forkJoin} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {catchError, delay, map} from "rxjs/operators";

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: (err: any) => console.warn('error en subs: ', err),
    complete: () => console.info('complete')
};
