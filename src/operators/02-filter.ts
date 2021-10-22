import {Observable, range, from, fromEvent} from 'rxjs';
import {filter, map} from 'rxjs/operators';

// range(1, 10).pipe(
//     filter((val:number) => val % 2 === 1)
// ).subscribe(console.log);

range(1, 10).pipe(
    filter((val: number, i: number) => {
        console.log('index: ', i);
        return val % 2 === 1
    })
)/*.subscribe(console.log)*/;

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
]

from(personajes).pipe(
    filter((per: Personaje) => {
        return per.tipo !== 'heroe';
    })
).subscribe(console.log);

const keyup$:Observable<string> = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map<KeyboardEvent,string>( (event: KeyboardEvent)  => { return event.code}),
    filter<string>((key: string) => key === 'Enter')
);

keyup$.subscribe(console.log)
