import {of} from 'rxjs';
import {ajax, AjaxError, AjaxResponse} from 'rxjs/ajax';
import {pluck, catchError} from "rxjs/operators";

const url: string = 'https://api.github.com/users?per_page=5';

// const manejaErrores = (response: Response): Response => {
//     if (!response.ok) {
//         throw new Error(response.statusText)
//         throw new Error(response.statusText)
//     }
//     return response;
// }

const atrapaError = (error: AjaxError) => {
    console.warn(error.message);
    return of([]);
}

// const fetchPromise: Promise<any> = fetch(url);

// fetchPromise
//     .then((resp: Response) => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error'));

// fetchPromise
//     .then(manejaErrores)
//     .then((resp: Response) => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error'));

ajax(url).pipe(
    pluck<AjaxResponse<any>>('response'),
    catchError(atrapaError)
).subscribe(users => console.log('users: ', users));
