import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';

const url: string = 'https://httpbin.org/delay/1';
// const url: string = 'https://api.github.com/users?per_page=5';

const obs$: Observable<any> = ajax.getJSON(url,{
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe(data => console.log('data: ', data));

