import {Observable, Observer, of, from} from 'rxjs';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

const miGenerador = function *():Generator{
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable:Generator = miGenerador();

// for (let id of miIterable) {
//     console.log(id);
// }

from(miIterable).subscribe(observer);

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 * */

// const src$:Observable<number> = from([1,2,3,4,5]);
const src1$:Observable<number> = of(...[1,2,3,4,5]);
// const src$:Observable<string> = from('Diego');
const src$:Observable<Response> = from(fetch('https://api.github.com/users/klerith'));

src1$.subscribe(observer);
src$.subscribe(observer);

// src$.subscribe( async(resp:Response) => {
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// });
