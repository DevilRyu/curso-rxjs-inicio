import {of, interval, Observable, forkJoin} from 'rxjs';
import {delay, take} from "rxjs/operators";

const numeros$: Observable<number> = of(1, 2, 3, 4);
const interval$: Observable<number> = interval(1000).pipe(take(3));
const letras$: Observable<string> = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe(console.log);

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe(resp => {
//     console.log('numeros: ', resp[0]);
//     console.log('intervalo: ', resp[1]);
//     console.log('letras: ', resp[2]);
// });

const observables: readonly any[] = [numeros$, interval$, letras$];


forkJoin(
    observables
).subscribe(resp => {
    console.log(resp)
});
