import {from, Observable} from 'rxjs';
import {scan, reduce, map} from 'rxjs/operators';

const numeros: number[] = [1, 2, 3, 4, 5];

const totalAcumulador = (acc:number, cur:number):number =>{
    return  acc+cur;
}

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
).subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log);

// Redux
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}
const user:Usuario[] = [
    {id: 'die', autenticado: false, token:null},
    {id: 'die', autenticado: true, token:'ABC'},
    {id: 'die', autenticado: true, token:'ABC123'},
];

const state$:Observable<Usuario> = from(user).pipe(
    scan( (acc:Usuario, cur:Usuario) => {
        return {...acc, ...cur}
    },{edad: 33})
);

const id$:Observable<any> = state$.pipe(
    map((state) => state)
)

id$.subscribe(console.log);
