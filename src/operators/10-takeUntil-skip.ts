import {Observable, Observer, interval, fromEvent} from 'rxjs';
import {takeUntil, skip, tap} from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

const boton:HTMLButtonElement = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$:Observable<number> = interval(1000);
// const clickBtn$:Observable<any> = fromEvent(boton,'click');
const clickBtn$:Observable<any> = fromEvent(boton,'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap(() => console.log('tap después de skip')),
);

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe(observer);
