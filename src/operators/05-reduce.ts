import {interval, Observer} from 'rxjs';
import {take, reduce, tap} from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

const numbers: number[] = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number): number => {
    return acumulador + valorActual;
}

const total: number = numbers.reduce(totalReducer, 0);
console.log('total arr', total);

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
).subscribe(observer);
