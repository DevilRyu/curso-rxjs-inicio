import {Observable, Observer, fromEvent} from 'rxjs';

const observer: Observer<any> = {
    next: (value: any) => console.log('next', value),
    error: null,
    complete: () => console.info('Terminamos la secuencia')
};

/**
 * Eventos del DOM
 */
const src1$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');
const src2$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(({x,y}) => {
    console.log(x);
    console.log(y);
});
src2$.subscribe((evento:KeyboardEvent) => {
    console.log(evento.key);
});
