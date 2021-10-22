import {fromEvent, Observable, Observer, range} from 'rxjs';
import {map, pluck, mapTo} from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

