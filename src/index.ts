import {Observable, Observer, of} from 'rxjs';
import {ajax, AjaxError, AjaxResponse} from 'rxjs/ajax';
import {map, pluck, catchError} from "rxjs/operators";

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

const url: string = 'https://httpbin.org/delay/1';
// const url: string = 'https://api.github.com/users?per_page=5';

const obs$: Observable<any> = ajax.getJSON(url,{
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe(data => console.log('data: ', data));

