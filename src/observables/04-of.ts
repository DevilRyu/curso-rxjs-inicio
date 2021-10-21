import {Observable, Observer, of} from 'rxjs';

const observer: Observer<any> = {
    next: (value: number) => console.log('next', value),
    error: null,
    complete: () => console.info('Terminamos la secuencia')
};

// const obs$: Observable<any> = of(1,2,3,4,5,6);
const obs$: Observable<number> = of(...[1,2,3,4,5,6]);
// const obs$: Observable<any> = of([1,2],{a:1,b:2}, function () {}, true, Promise.resolve(true));

console.log('Inicio del Obs$');

obs$.subscribe(observer);

console.log('Fin del Obs$');
