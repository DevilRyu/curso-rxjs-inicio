import {Observable, Observer, interval, timer} from 'rxjs';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

const hoyEn5: Date = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$: Observable<any> = interval(1000);
// const timer$:Observable<any> = timer(2000);
// const timer$:Observable<any> = timer(2000, 1000);
const timer$: Observable<any> = timer(hoyEn5);

console.log('Inicio');
interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');
