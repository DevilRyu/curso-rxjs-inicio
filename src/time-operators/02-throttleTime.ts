import {asyncScheduler, fromEvent, Observable} from 'rxjs';
import {throttleTime, distinctUntilChanged, pluck} from 'rxjs/operators';

const click$: Observable<any> = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
)// .subscribe(console.log);

// Ejemplo 2
const input: HTMLInputElement = document.createElement('input');
document.querySelector('body').append(input);

const input$: Observable<any> = fromEvent(input, 'keyup');
input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);

