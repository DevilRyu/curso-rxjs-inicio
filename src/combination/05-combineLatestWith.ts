import {combineLatestWith, fromEvent} from 'rxjs';
import {pluck} from "rxjs/operators";

// const keyup$:Observable<any> = fromEvent(document, 'keyup');
// const click$:Observable<any> = fromEvent(document, 'click');
//
// keyup$.pipe(
//     pluck('type'),
//     combineLatestWith(click$.pipe(pluck('type')))
// ).subscribe(console.log);

const input1: HTMLInputElement = document.createElement('input');
const input2: HTMLInputElement = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '*******';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (element:HTMLElement) => {
    return fromEvent<KeyboardEvent>(element,'keyup').pipe(
        pluck('target','value')
    );
}

getInputStream(input1).pipe(
    combineLatestWith(getInputStream(input2))
).subscribe(console.log);
