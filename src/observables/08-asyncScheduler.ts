import { asyncScheduler, Subscription} from 'rxjs';


// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = function (): void {
    console.log('Hola Mundo');
}

const saludar2 = function ({nombre, apellido}): void {
    console.log(`Hola ${nombre} ${apellido}`);
}

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule<any>(
    saludar2,
    2000,
    {nombre: 'Diego', apellido: 'Muñoz'}
);
const subs:Subscription = asyncScheduler.schedule(function (state) {

    console.log('state', state);

    this.schedule(state + 1, 1000)

}, 3000, 0);


// setTimeout(() =>{
//     subs.unsubscribe()
// },6000);

asyncScheduler.schedule( () => {subs.unsubscribe()}, 6000)
