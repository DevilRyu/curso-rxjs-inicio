import {asyncScheduler, Observable, observeOn, range} from 'rxjs';

// const src$:Observable<any> = of(1,2,3,4,5);
// síncrono
const src1$:Observable<number> = range(1,4);
// asíncrono
const src$:Observable<number> = range(1,4).pipe(observeOn(asyncScheduler)) ;

console.log('inicio');
src1$.subscribe(console.log);
src$.subscribe(console.log);
console.log('fin');
