import {Observable, Observer, of} from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import { catchError} from "rxjs/operators";

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: (err: any) => console.warn('error en subs: ', err),
    complete: () => console.info('complete')
};

const url: string = 'https://httpbXXin.org/delay/1';
// const url: string = 'https://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
};

// const obs$: Observable<any> = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$: Observable<any> = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$: Observable<any> = ajax.getJSON(url);
// const obs2$: Observable<any> = ajax(url);

obs$.pipe(
    catchError(manejaError)
).subscribe(observer);
// obs2$.subscribe(data => console.log('ajax: ', data));


