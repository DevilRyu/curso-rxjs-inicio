import {fromEvent, Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {pluck, switchMap} from "rxjs/operators";

// Referencias
const body: HTMLBodyElement = document.querySelector('body');
const textInput: HTMLInputElement = document.createElement('input');
const orderList: HTMLOListElement = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

const url:string = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    switchMap(texto => ajax.getJSON(url+texto))
).subscribe(console.log);
