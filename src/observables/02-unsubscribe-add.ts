import {Observable, Observer, Subscriber, Subscription} from 'rxjs';

const observer: Observer<any> = {
    next: (value: number) => console.log('next', value),
    error: (err: any) => console.warn('error: ', err),
    complete: () => console.info('Completado')
};

const intervalo$: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {

    // Crear un contador, 1,2,3,4,5,....
    let cont: number = 0;

    const interval = setInterval(() => {
        // cada segundo
        subscriber.next(cont++);
        console.log(cont);

    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);


    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

});

const subscription: Subscription = intervalo$.subscribe(observer);
const subscription2: Subscription = intervalo$.subscribe(observer);
const subscription3: Subscription = intervalo$.subscribe(observer);

subscription.add(subscription2);
subscription.add(subscription3);

setTimeout(() => {
    subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('Completado timeout');
}, 6000);
