import {Observable, range} from 'rxjs';
import {map, tap} from 'rxjs/operators';

const numeros$: Observable<number> = range(1, 5);

numeros$.pipe(
    tap((x: number) => console.log('antes: ', x)),
    map((val: number) => (val * 10).toString()),
    tap({
        next: (value:string) => console.log('después', value),
        complete: () => console.log('Se terminó todo')
    })
).subscribe((value: string) => console.log('subs', value));
