import {Observable, Observer, Subscriber} from 'rxjs';

const observer: Observer<any> = {
    next: (value: string) => console.log('next', value),
    error: (err: any) => console.warn('error: ', err),
    complete: () => console.info('Completado')
};

const obs$: Observable<string> = new Observable<string>((subs: Subscriber<string>) => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Diego';


    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');

});

// Deprecado en v8
// obs$.subscribe(
//     (valor: string) => console.log('next: ', valor),
//     (error: any) => console.warn('error: ', error),
//     () => console.info('Completado')
// );

obs$.subscribe(observer);
