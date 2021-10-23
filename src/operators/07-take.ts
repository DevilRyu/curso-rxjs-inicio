import {Observable, Observer, of} from 'rxjs';
import {take, tap} from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

const numeros$: Observable<number> = of(1, 2, 3, 4, 5);

numeros$.pipe(
    tap((t: number) => console.log('take: ',t)),
    take(3)
).subscribe(observer);
