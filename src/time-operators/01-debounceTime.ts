import {Observable, fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, pluck} from 'rxjs/operators';

const click$:Observable<any> = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
)// .subscribe(console.log);

// Ejemplo 2
const input:HTMLInputElement = document.createElement('input');
document.querySelector('body').append(input);

const input$:Observable<any> = fromEvent(input,'keyup');
input$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);
